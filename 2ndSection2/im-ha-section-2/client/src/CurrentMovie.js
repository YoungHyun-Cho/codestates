// TODO: 하드코딩된 데이터를 동적으로 렌더링 되도록 다시 작성합니다.

export default function CurrentMovie({ movie }) {
  if (!movie) return <div className='left-current-side'>영화를 선택하세요</div>;
  else return (
    <>
      <div className='left-current-side'>
        <div className='current-movie'>
          <h1 className='title'>{movie.title}</h1>
          <img
            className='thumbnail'
            src={movie.medium_cover_image}
            alt='thumbnail'
          />
          <p className='rating'>rating : {movie.rating}</p>
          <p className='running-time'>runtime : {movie.runtime}</p>
          <p>description</p>
          <p className='description'>{movie.description_full}</p>
        </div>
      </div>
    </>
  );
}
