import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getTrending from '../services/apiTrending';

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
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Home;
