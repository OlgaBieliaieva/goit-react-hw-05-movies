import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useRef, useEffect, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import * as Api from '../services/apiId';
import Info from '../components/Info/Info';

function MovieDetails() {
  const { movieId } = useParams();
  console.log(useParams());
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const query = Number(movieId);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    Api.getMovieById(query)
      .then(response => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [query]);

  console.log(movie);

  return (
    <main>
      <div>
        <Link to={backLinkLocationRef.current}>⬅ Go back</Link>
      </div>
      {movie.title && (
        <>
          <Info movieInfo={movie} />
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
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
