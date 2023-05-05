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
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    getCastById(query)
      .then(response => {
        console.log(response.data);
        setCast(response.data.cast);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [query]);

  console.log(cast);
  return (
    <div className={css.castContainer}>
      <h3 className={css.subTitle}>Cast</h3>
      {(error || cast.length === 0) && (
        <p className={css.error}>Results not found</p>
      )}
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
    </div>
  );
}

export default Cast;
