import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import { getCastById } from '../../services/apiId';
import defaultImg from '../../img/defaultImg.jpg';
import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const query = Number(movieId);
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    getCastById(query)
      .then(response => {
        setCast(response.data.cast);
        setStatus(response.status);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [query]);

  return (
    <div className={css.castContainer}>
      <h3 className={css.subTitle}>Cast</h3>

      {cast.length > 0 && (
        <ul className={css.gallery}>
          {cast.map(({ profile_path, name, character }) => {
            return (
              <li key={shortid.generate()}>
                {profile_path !== null && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                    alt={name}
                  />
                )}
                {profile_path === null && (
                  <img src={defaultImg} alt={name} width={200} height={300} />
                )}
                <p className={css.info}>{name}</p>
                <p className={css.info}>
                  <span className={css.infoEl}>Character:</span> {character}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {error && <p className={css.error}>Results not found</p>}
      {status === 200 && cast.length === 0 && (
        <p className={css.error}>Results not found</p>
      )}
    </div>
  );
}

export default Cast;
