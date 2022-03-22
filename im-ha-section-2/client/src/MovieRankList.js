import MovieRankListEntry from './MovieRankListEntry';
import CurrentGenre from './CurrentGenre';
import MovieRankListPagination from './MovieRankListPagination';
import { useState } from 'react';


export default function MovieRankList({ movies, onClick }) {
  const [params, setParams] = useState({ pageNum: 1, selectValue: '3' });

  // params = { pageNum: 1, selectValue: 10 }
  const handleSelectAndButton = (num) => {
    let newPageNum;
    if (num === '-') {
      newPageNum = params.pageNum > 1 ? params.pageNum - 1 : params.pageNum;
      return setParams({ ...params, pageNum: newPageNum });
    }
    else if (num === '+') {
      newPageNum = params.pageNum < 4 ? params.pageNum + 1 : params.pageNum;
      return setParams({ ...params, pageNum: newPageNum });
    }
    else {
      return setParams({ pageNum: 1, selectValue: num });
    }

  };

  // console.log('movies in MovieRankList : ', movies)
  if (movies.length === 0) {
    return (
      <div className='right-movie-list'>
            <CurrentGenre currentGenre={'genre?'} />
            <MovieRankListPagination params={params} setParams={handleSelectAndButton} /> 
        <div className='card-list'>
        <p>영화 목록이 비었습니다.</p>;
        </div>
      </div>
    );
  }
  if (params.selectValue === '10') {
    return (
      <div className='right-movie-list'>
            <CurrentGenre currentGenre={'genre?'} />
            <MovieRankListPagination params={params} setParams={handleSelectAndButton} /> 
        <div className='card-list'>
          {movies.map(item => <MovieRankListEntry movie={item} key={item.id} onClick={onClick} />)}
        </div>
      </div>
    );
  }
  if (params.selectValue === '5') {
    return (
      <div className='right-movie-list'>
            <CurrentGenre currentGenre={'genre?'} />
            <MovieRankListPagination params={params} setParams={handleSelectAndButton} /> 
        <div className='card-list'>
          {params.pageNum === 1 ? 
          movies.map((item, index) => index < Number(params.selectValue) ? <MovieRankListEntry movie={item} key={item.id} onClick={onClick} /> : <div/>) 
          : movies.map((item, index) => index >= 5 && index < Number(params.selectValue) * 2 ? <MovieRankListEntry movie={item} key={item.id} onClick={onClick} /> : <div/>)}
        </div>
      </div>
    );
  }
  if (params.selectValue === '3' && params.pageNum === 1) {
    return (
      <div className='right-movie-list'>
            <CurrentGenre currentGenre={'genre?'} />
            <MovieRankListPagination params={params} setParams={handleSelectAndButton} /> 
        <div className='card-list'>
          {movies.map((item, index) => index < Number(params.selectValue) ? <MovieRankListEntry movie={item} key={item.id} onClick={onClick} /> : <div/>)}
        </div>
      </div>
    );
  }
  if (params.selectValue === '3' && params.pageNum === 2) {
    return (
      <div className='right-movie-list'>
            <CurrentGenre currentGenre={'genre?'} />
            <MovieRankListPagination params={params} setParams={handleSelectAndButton} /> 
        <div className='card-list'>
          {movies.map((item, index) => index >= 3 && index < Number(params.selectValue) * 2 ? <MovieRankListEntry movie={item} key={item.id} onClick={onClick} /> : <div/>)}
        </div>
      </div>
    );
  }
  if (params.selectValue === '3' && params.pageNum === 3) {
    return (
      <div className='right-movie-list'>
            <CurrentGenre currentGenre={'genre?'} />
            <MovieRankListPagination params={params} setParams={handleSelectAndButton} /> 
        <div className='card-list'>
          {movies.map((item, index) => index >= 6 && index < Number(params.selectValue) * 3 ? <MovieRankListEntry movie={item} key={item.id} onClick={onClick} /> : <div/>)}
        </div>
      </div>
    );
  }
  if (params.selectValue === '3' && params.pageNum === 4) {
    return (
      <div className='right-movie-list'>
            <CurrentGenre currentGenre={'genre?'} />
            <MovieRankListPagination params={params} setParams={handleSelectAndButton} /> 
        <div className='card-list'>
          {movies.map((item, index) => index >= 9 && index < Number(params.selectValue) * 4 ? <MovieRankListEntry movie={item} key={item.id} onClick={onClick} /> : <div/>)}
        </div>
      </div>
    );
  }
}
