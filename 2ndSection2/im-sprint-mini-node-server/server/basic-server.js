const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  console.log(`http request method is ${request.method}, url is ${request.url}`);
  // http 메서드가 OPTIONS일 때 => CORS 헤더를 응답해줘야 함.
  if (request.method === 'OPTIONS') {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }

  // http 메서드가 POST이고, 세부 요청이 /upper일 때
  else if (request.method === 'POST' && request.url === '/upper') {
    let body = [];
    request.on('data', chunk => {
      body.push(chunk);
    }).on('end', () => {
      body = body.toString().toUpperCase();
      response.writeHead(200, defaultCorsHeader);
      response.end(body);
    });
  }
  // 질문 : chunk는 Buffer의 인스턴스인지?
  // 질문 : Buffer.concat(body) => 바디를 연결해 새로운 배열로 반환한다고
  // 알고 있는데, 굳이 왜 써야 하는건지?

  // http 메서드가 POST이고, 세부 요청이 /lower일 때
  else if (request.method === 'POST' && request.url === '/lower') {
    let body = [];
    request.on('data', chunk => {
      body.push(chunk);
    }).on('end', () => {
      body = body.toString().toLowerCase();
      response.writeHead(200, defaultCorsHeader);
      response.end(body);
    });
  }

  // 나머지는 에러로 처리 => bad request
  else {
    response.writeHead(400, defaultCorsHeader);
    response.end();
    console.error(new Error("ERROR!!!!!!!!!!!!!!!!!"));
  }

  // response.writeHead(200, defaultCorsHeader);
  // response.end('hello mini-server sprints');
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};


// https://jsikim1.tistory.com/184
// preflight 요청 스킵되는 경우
