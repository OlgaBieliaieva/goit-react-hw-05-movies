import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../services/apiId';
//! Prop-types

function Cast() {
  const { movieId } = useParams();
  const query = Number(movieId);
  const [cast, setCast] = useState([]);

  console.log(query);

  useEffect(() => {
    if (!query) {
      console.log('gjh,b');
      return;
    }

    getCastById(query)
      .then(response => {
        console.log(response.data);
        setCast(response.data.cast);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [query]);

  console.log(cast);
  return (
    <div>
      <h1>Cast</h1>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ profile_path, name, character, id }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Cast;
