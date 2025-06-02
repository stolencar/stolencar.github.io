function Film({ data }) {
  return (
    <div className="film">
      <img src={data.poster} className="film-poster" />
      <div className="film-info">
        <h2 className="film-title">{data.title}</h2>
        <p className="film-description">{data.description}</p>
        <div className="film-details">
          <span>{data.director}</span>•<span>{data.releaseDate}</span>•<span>{data.genre}</span>
        </div>
      </div>
    </div>
  );
}

export default Film;
