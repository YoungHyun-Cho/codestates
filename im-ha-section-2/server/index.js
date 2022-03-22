const express = require('express');
const cors = require('cors');

// HINT: 영화 데이터는 다음 movies 변수를 이용하세요
const { movies } = require('./data.json');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/movies', (req, res) => {
  return res.send(movies);
});

app.get('/movies/:id', (req, res) => {
  // TODO:
  // console.log(typeof req.params.id);
  let searched = movies.filter(item => item.id === Number(req.params.id));
  if (!searched.length) res.writeHead(404);
  // console.log('searched :', searched);
  // if (searched.length) res.writeHead(200);
  // else res.writeHead(404);
  // console.log(...searched)
  return res.send(...searched);
});

// 테스트를 위한 코드입니다. 건드리지 마세요.
if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, () => {
    console.log('server listen on 3001');
  });
}

module.exports = app;
