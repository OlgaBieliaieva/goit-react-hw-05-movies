import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getTrending from '../services/apiTrending';
import css from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <main className={css.pageContainer}>
      <h1>Trending today</h1>
      <ul className={css.trendingList}>
        {movies.map(({ title, id }) => {
          return (
            <li className={css.link} key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Home;
