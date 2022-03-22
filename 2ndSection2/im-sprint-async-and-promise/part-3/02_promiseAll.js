var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([
    fetch(newsURL).then(res => res.json()),
    fetch(weatherURL).then(res => res.json())
  ])
  .then(data => {
    let answer = {};
    answer.news = data[0].data;
    answer.weather = data[1];
    return answer;
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}