import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import getMovieByName from '../services/apiName';
import css from './Movies.module.css';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movie_title = searchParams.get('movie_title') ?? '';
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (movie_title.length === 0) {
      return;
    }

    getMovieByName(movie_title)
      .then(response => {
        setMovies(response.data.results);
        setStatus(response.status);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movie_title]);

  const handleFormSubmit = e => {
    e.preventDefault(e);
    const param = e.target[0].value;
    const currentParam = param !== '' ? { movie_title: param } : {};
    setSearchParams(currentParam);
  };

  return (
    <main className={css.pageContainer}>
      <form className={css.search} onSubmit={handleFormSubmit}>
        <label>
          <input
            className={css.searchField}
            type="text"
            placeholder="start searching"
            autoComplete="off"
          />
        </label>
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
      {error && <p className={css.error}>Results not found</p>}
      {status === 200 && movies.length === 0 && (
        <p className={css.error}>Results not found</p>
      )}
      {movies.length > 0 && (
        <ul className={css.moviesList}>
          {movies.map(({ title, id }) => {
            return (
              <li className={css.link} key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
export default Movies;
