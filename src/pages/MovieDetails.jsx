import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useRef, useEffect, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { getMovieById } from '../services/apiId';
import Info from '../components/Info/Info';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const query = Number(movieId);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovieById(query)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [query]);

  return (
    <main className={css.pageContainer}>
      <div>
        <Link to={backLinkLocationRef.current} className={css.backLink}>
          ⬅ Go back
        </Link>
      </div>
      {(error || movie.title === false) && (
        <p className={css.error}>Results not found</p>
      )}
      {movie.title && (
        <>
          <Info movieInfo={movie} />
          <h4 className={css.subtitle}>Additional information</h4>
          <ul className={css.detailsList}>
            <li className={css.link}>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li className={css.link}>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
}

export default MovieDetails;
