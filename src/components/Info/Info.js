//! Prop-types

function Info({ movieInfo }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
      <h2>{` ${title} (${release_date.slice(0, 4)})`}</h2>
      <p>User score: {vote_average.toFixed(1)}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
    </div>
  );
}
export default Info;
