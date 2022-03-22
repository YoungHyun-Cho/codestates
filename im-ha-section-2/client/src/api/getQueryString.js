export default function getQueryString({ limit, page, genre }) {
  // Advanced Challenge: limit, page, genre에 맞는 쿼리 파라미터 스트링을 리턴해야 합니다.
  // ex) limit: 5, page: 2 => '?limit=5&page=2'
  let query = '?';
  let arr1 = [limit, page, genre];
  let arr2 = ['limit', 'page', 'genre'];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]) query += `${arr2[i]}=${arr1[i]}`;
    if (i !== 2) query += '&';
  }
  return query;
}
