var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const [ news, weather ] = [
    await fetch(newsURL).then(res => res.json()),
    await fetch(weatherURL).then(res => res.json())
  ];
  // const [news, weather] = [newsURL, weatherURL].map(item => await fetch(item).then(res => res.json()));
  return {news: news.data, weather}
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}