import fetch from 'node-fetch';
import getQueryString from './getQueryString'; // Advanced Challenge

export async function getMovies(params = {}) {
  // TODO: fetch를 이용해 endpoint로부터 영화 정보를 받아오세요
  // Advanced Challenge: getQueryString 함수를 이용하여, 전달되는 params에 맞는 적합한 쿼리 파라미터를 포함하여 요청을 보내야 합니다.
  let endpoint = 'https://okie249pmk.execute-api.ap-northeast-2.amazonaws.com/movies';
  // let url = 'http://localhost:3001/movies';
  return await fetch(endpoint).then(res => res.json());
  // return await fetch(url).then(res => res.json());
}