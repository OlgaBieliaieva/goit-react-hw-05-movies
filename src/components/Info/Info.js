import PropTypes, { shape } from 'prop-types';
import css from './Info.module.css';

function Info({ movieInfo }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <div className={css.infoContainer}>
      <div className={css.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
        <div className={css.contentWrapper}>
          <h2 className={css.title}>{` ${title} (${release_date.slice(
            0,
            4
          )})`}</h2>
          <div>
            <p>User score: {vote_average.toFixed(1)}</p>
            <h3 className={css.subTitle}>Genres</h3>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      </div>
      <h3 className={css.subTitle}>Overview</h3>
      <p>{overview}</p>
    </div>
  );
}
export default Info;

Info.propTypes = {
  movieInfo: PropTypes.objectOf(
    shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.object),
    })
  ),
};
