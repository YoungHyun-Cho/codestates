import flightList from '../resource/flightList'
import fetch from 'node-fetch'

if (typeof window !== "undefined") {
  localStorage.setItem('flight', JSON.stringify(flightList));
}

// condition => {departure: 'ICN', destination: ___}
export function getFlight(filterBy = {}) {
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.
  let url = 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight';
  if (!filterBy.destination) url += `?departure=${filterBy.departure}`;
  else url += `?departure=${filterBy.departure}&destination=${filterBy.destination}`;
  return fetch(url).then(res => res.json());
  // fetch는 기본적으로 프로미스 객체를 반환함. 
  // 그 안에 있는 응답 정보를 이용하려면 프로미스 객체 내의 정보에 접근해야 하는데, 
  // 그렇게 하기 위해 .then(res => res.json());
  // json 메서드 처리 => 응답으로 도착한 정보를 사용할 수 있음. 
}