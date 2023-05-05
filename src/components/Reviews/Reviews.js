import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/apiId';
import css from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const query = Number(movieId);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

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
        setError(error.message);
      });
  }, [query]);

  console.log(reviews);
  return (
    <div className={css.reviewsContainer}>
      <h3 className={css.subTitle}>Reviews</h3>
      {(error || reviews.length === 0) && (
        <p className={css.error}>Results not found</p>
      )}
      {reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {reviews.map(({ author, content, created_at, id }) => {
            return (
              <li className={css.listItem} key={id}>
                <p className={css.info}>
                  <span className={css.infoEl}>Author:</span> {author}
                </p>
                <p className={css.info}>
                  <span className={css.infoEl}>Created:</span>{' '}
                  {created_at.slice(0, 10)}
                </p>
                <p>"{content}"</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
