import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/apiId';
//! Prop-types

function Reviews() {
  const { movieId } = useParams();
  const query = Number(movieId);
  const [reviews, setReviews] = useState([]);

  console.log(query);

  useEffect(() => {
    if (!query) {
      console.log('gjh,b');
      return;
    }

    getReviewsById(query)
      .then(response => {
        console.log(response.data);
        setReviews(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [query]);

  console.log(reviews);
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ author, content, created_at, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>Created: {created_at.slice(0, 10)}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
