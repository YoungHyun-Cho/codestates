// const express = require('express')
// const app = express();

// const cors = require('cors');


// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// app.use('/', function(req, res, next) {
//   console.log(`http request method is ${req.method}, url is ${req.url}`);
//   next();
// });

// // let upper1 = [""];
// const body ={ upper: []};
// // const body = "hello world"



// app.get('/upper', function (req, res) {
//   res.send(body);
//   res.end();
// });

// app.get('/lower', function (req, res) {
//   res.send(body);
// });

// app.post('/upper', function (req, res) {
//   body.upper.push(req.body);
//   // console.log(req.body);
//   // console.log(req.params);
//   // console.log(req.query);
//   // res.send(req.body)
//   res.end(body);
// });

// app.listen(5000, () => console.log(body));

const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  if (request.method === 'OPTIONS') { // 클라이언트가 응답 헤더를 요청했을 때
    response.writeHead('200', defaultCorsHeader); // 두 번째 인수인 응답 헤더를 클라이언트에게 전송함.
    response.end();
  }
  if (request.method === 'POST' && request.url === '/lower') {
    /**
     * 바디 요청
     * request 객체는 readableStream 인터페이스를 구현함. data와 end 이벤트를 통해 데이터를 받을 수 있음. 
     * 그러려면 data와 end 이벤트에 이벤트 리스너를 등록해야 함.
     */
    let body = [];
    request
      .on('data', chunk => { body.push(chunk) }) // 표현식이 아닌 문이므로 중괄호 필요, request.data에는 요청한 내용이 담겨져 있음.
      .on('end', () => {
        body = Buffer.concat(body).toString().toLowerCase();
        response.writeHead('200', defaultCorsHeader); // 응답 처리 결과
        response.end(body); // 응답 전송
      });

  }   // 여기서 Buffer는 data 이벤트에서 발생시킨 chunk.
  else if (request.method === 'POST' && request.url === '/upper') {
    let body = [];
    request
    .on('data', chunk => { body.push(chunk) })
    .on('end', () => {
      body = Buffer.concat(body).toString().toUpperCase();
      response.writeHead('200', defaultCorsHeader);
      response.end(body);
    });
  }
  // 이외 모든 요청은 에러 처리
  else {
    response.on('error', error => {
      response.writeHead('400', defaultCorsHeader);
      console.error(error);
    });
  }


  // console.log(
  //   `http request method is ${request.method}, url is ${request.url}`
  // );
  // response.writeHead(200, defaultCorsHeader);
  // response.end('hello mini-server sprints');
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
}); // 응답 대기 상태

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};
