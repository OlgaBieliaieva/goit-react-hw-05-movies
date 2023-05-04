import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import getMovieByName from '../services/apiName';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movie_title = searchParams.get('movieTitle') ?? '';
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (movie_title.length === 0) {
      return;
    }
    getMovieByName(movie_title)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [movie_title]);

  const handleFormSubmit = e => {
    e.preventDefault(e);
    setSearchParams({ movie_title: e.target[0].value });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input type="text" />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Movies;
