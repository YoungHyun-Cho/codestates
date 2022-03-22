// TODO: 하드코딩된 데이터를 동적으로 렌더링 되도록 다시 작성합니다.

export default function MovieRankListEntry({ movie, onClick }) {
  return (
    <div className='card' onClick={() => onClick(movie.id)}>
      <div style={{ flex: 3 }}>
        <img width='100%' height='100%' src={movie.medium_cover_image} alt="poster" />
      </div>
      <div style={{ flex: 7 }}>
        <h3 className='title'>{movie.title}</h3>
        <p className='rating'>Rating: {movie.rating}</p>
        <p className='running-time'>Running Time: {movie.runtime} min</p>
        <p>Genres</p>
        <div className='tag-list'>
          {movie.genres.map(item => <div className='tag' key={item}>{item}</div>)}
        </div>
      </div>
    </div>
  );
}
