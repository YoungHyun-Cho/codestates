# Section 2: Hiring Assessment

![ha2](https://user-images.githubusercontent.com/61301574/119817745-4d841c00-bf29-11eb-9d80-ed9152817613.gif)

이번 Section 2: Hiring Assessment에서는 Full Stack으로 영화 정보 조회 애플리케이션 **Code States Movie Top 10**을 만듭니다.

## How to HA

### 의존성 모듈 설치

- 클라이언트 디렉터리(`./client`)와 서버 디렉터리(`./server`)에서 `npm install`을 이용해 클라이언트 및 서버의 의존성 모듈(dependencies)를 설치합니다.

### 애플리케이션 실행

- 클라이언트 (`./client`)
  - `cd client` 명령어를 입력하여 클라이언트 앱 디렉터리로 이동합니다.
  - `npm start` npm script를 이용해 클라이언트 앱을 실행합니다.

- 서버 (`./server`)
  - `cd server` 명령어를 입력하여 서버 앱 디렉터리로 이동합니다.
  - `index.js` 파일을 통해 서버 앱을 실행합니다.
  - 필요에 따라 `package.json`를 수정하여 npm script를 추가하거나 의존성 모듈을 설치할 수 있습니다.
    - 서버 실행 스크립트 `npm run start`를 직접 작성해 보세요.
    - 필요에 따라 nodemon 등의 유틸리티를 이용할 수 있습니다.

### 애플리케이션 테스트

- 클라이언트 디렉터리(`./client`)와 서버 디렉터리(`./server`)에서 테스트를 진행합니다.
  - 클라이언트 테스트: 클라이언트 디렉터리 `./client`에서 `npm test` 실행
  - 서버 테스트: 클라이언트 디렉터리 `./server`에서 `npm test` 실행

### 과제 제출

- 클라이언트 디렉터리(`./client`)와 서버 디렉터리(`./server`)에서 과제를 제출합니다.
  - 클라이언트 테스트: 클라이언트 디렉터리 `./client`에서 `npm run submit` 실행
  - 서버 테스트: 클라이언트 디렉터리 `./server`에서 `npm run submit` 실행

- 주어진 시간 내 과제를 제출하세요.
  - 과제는 여러 번 제출할 수 있습니다.
  - Bare Minimum Requirements를 모두 통과하면 과제를 1차로 제출하세요.
  - Bare Minimum Requirements를 모두 하지 못했어도 제출하세요. (제출 내역이 없으면 0점 처리됩니다.)
  - Bare Minimum Requirements를 모두 통과하고 제출했으면, Advanced Challenge에 도전하세요.
  - Advanced Challenge도 같은 npm script로 제출해 주세요. (`npm run submit`)

## 과제 설명

### Code States Movie Top 10 Client

- Code States Movie Top 10 클라이언트 코드가 React로 이미 작성되어 있습니다.
- 하드코딩된 데이터가 동적으로 렌더링 될 수 있도록 코드를 작성합니다.
  - movieDataApi.js를 이용하여 데이터를 직접 가져옵니다.

### Bare Minimum Requirements - client

Bare Minimum Requirements - client 테스트를 모두 통과하세요.

- Component unit test
  - mockMovie.js를 이용하여 샘플 데이터를 가져옵니다.
  - 각 컴포넌트의 기능을 테스트합니다.
    - MovieRankListEntry, MovieRankList, CurrentMovie
- App feature test
  - 컴포넌트 간 상호작용을 통한 기능 구현을 테스트합니다.
    - 영화 목록 클릭 시 현재 영화정보 화면 업데이트 기능을 테스트합니다.
    - movieDataApi.js를 이용하여 데이터를 직접 가져옵니다.

### Code States Movie Top 10 Server

- 클라이언트 앱에서 이용한 영화 정보 조회용 서버를 직접 구현합니다.
- 다음 REST API를 구현해야 합니다.

| 메소드    | endpoint          | 설명                            |
| ------- | ----------------- | ------------------------------ |
| GET     | `/movies`         | 영화 목록을 전부 조회               |
| GET     | `/movies/{id}`    | id가 일치하는 한 개의 영화 데이터만 조회 |

### Bare Minimum Requirements - server

Bare Minimum Requirements - server 테스트를 모두 통과하세요.

- `/movies` 앤드포인트를 완성하세요.
- `/movies/{id}` 앤드포인트를 완성하세요.

실제 응답의 모양은 `data.json` 파일에 예시로 제공됩니다. 참고하여 API를 작성하세요.
서버의 요청을 클라이언트에서 처리할 수 있도록 만드는 것도 잊지 마세요.

### tips for server code

- `index.js` 파일을 통해 서버를 실행시킬 수 있습니다.
  - 서버가 실행되면, Postman으로 응답을 잘 받아오는지 테스트할 수 있습니다.
- 필요에 따라 `package.json` 파일에 scripts를 설정할 수 있습니다.
  - 서버 실행 스크립트를 직접 작성해 보세요.
- 필요에 따라 nodemon 등의 유틸리티를 이용할 수 있습니다.

## Advanced Challenge

Advanced Challenge는 섹션 2에서 배운 내용과 배우지 않은 내용을 스스로 평가할 수 있도록 제작되었습니다.
자신의 실력과 자기주도적 학습 능력을 보다 정확하게 확인할 수 있는 좋은 기회입니다. 풀 수 있는 데까지 도전해 보세요.

- Bare Minimum Requirement에 만족하는 애플리케이션은 영화 목록을 나눠서 볼 수 없습니다.
- 애플리케이션 사용성을 개선하기 위해서 쿼리 파라미러틑 이용하여 클라이언트와 서버에서 아래 기능을 구현합니다.
  - Pagination
  - Filtering

> Advanced Challenge는 HA 심사 평가에 반영하지 않습니다.
> Bare Minimum Requirements를 모두 통과하고 진행해 주세요.
> 클라이언트 테스트는 `index.test.js`의 주석을 참고하여 Advanced Challenge를 진행합니다.
> 서버 테스트는 Bare Minimum Requirements를 통과했으면 바로 도전하실 수 있습니다.

### Advanced Challenge - client

Pagination, Filtering 기능을 추가로 구현하고 Advanced Challenge - client 테스트를 모두 통과하세요.

- Params state
  - Advanced Challenge에서는 HTTP/네트워크 유닛에서 학습한 쿼리 파라미터를 적극 이용합니다.
  - 쿼리 파라미터를 전역 상태로 관리하게 위해 `App.js`에서 params state를 useState를 이용하여 선언합니다.
  - Bare minimum requirements에서 구현한 `App.js`의 fetch 요청이 params가 변경될 때마다 작동되도록 useEffect를 이용합니다.
- getQueryString
  - 조건에 따라 쿼리 파라미터 스트링을 리턴하는 `getQueryString`함수를 완성합니다.
- Pagination (페이지네이션)
  - 웹 애플리케이션에 보여줄 데이터를 페이지에 맞게 나눠서 가져올 수 있게 개발하는 프로세스가 페이지네이션입니다.
  - `MovieRankLinkPagination.js`에서 페이지네이션을 위한 엘리먼트를 작성합니다.
  - 이전 페이지, 다음 페이지 버튼을 클릭하면 params state가 변경되고, 새로운 fetch 요청을 할 수 있게 코드를 작성합니다.
- Filter by genre (필터링)
  - 쿼리 파라미터 genre를 이용하여, 해당 장르를 포함하는 영화만 가져올 수 있습니다.
  - `currentGenre.js`에서 필터하고자 하는 장르를 보여주기 위한 엘리먼트를 작성합니다.
  - 장르를 클릭하면 params state가 변경되고, 새로운 fetch 요청을 할 수 있게 코드를 작성합니다.

### Advanced Challenge - server

`/movies` 앤드포인트가 쿼리 파라미터에 맞는 응답을 보낼 수 있도록 서버를 제작하고 Advanced Challenge - server 테스트를 모두 통과하세요.

| 메소드  | endpoint          | 설명                           |
| ------- | ----------------- | ------------------------------ |
| GET     | `/movies`         | 영화 목록을 전부 조회          |

| query parameter | 설명                           |
| --------------- | ------------------------------ |
| limit           | 한 페이지에 담기는 영화 개수   |
| page            | 페이지 번호 (n 번째 페이지)    |
| genre           | 장르로 필터링                  |
