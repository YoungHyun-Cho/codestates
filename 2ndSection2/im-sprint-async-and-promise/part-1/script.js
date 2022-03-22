let player = document.querySelector('#player');
let title = document.querySelector('#title');

let btnCallback = document.querySelector('#btnCallback');
btnCallback.onclick = runCallback;

let btnPromise = document.querySelector('#btnPromise');
btnPromise.onclick = runPromise;

let btnAsync = document.querySelector('#btnAsync');
btnAsync.onclick = runAsync;

function runCallback() {
  resetTitle();
  playVideo();

  delay(1000 * 5, () => {
    pauseVideo();
    displayTitle();

    delay(500 * 5, () => {
      highlightTitle();

      delay(2000 * 5, resetTitle);
    });
  });
  // setTimeout(() => {
  //   pauseVideo();
  //   displayTitle();

  //   setTimeout(() => {
  //     highlightTitle();

  //     setTimeout(resetTitle, 10000);
  //   }, 2500);
  // }, 5000);
}
// 객체 : 빌트인 객체, 호스트 객체, 사용자 정의 객체
// 빌트인 객체 : 브라우저이던, 노드js던 자바스크립트를 쓰는 환경이라면 모두 공통적으로 가지고 있는 객체들
// 호스트 객체 : 브라우저 또는 노드js 환경에 따라 특정 환경만 가지는 객체 -> 브라우저에서는 Web API를 제공함.
// 사용자 정의 객체 : const obj = {1: 1}
// setTimeout은 호스트 객체의 메서드. 그 Web API 중의 하나가 setTimeout.

// 코드의 실행 주체 
// 1. 자바스크립트 엔진 (V8) => 싱글 스레드
// 2. 브라우저 => 멀티 스레드

function runPromise() {
  resetTitle();
  playVideo();

  sleep(1000 * 3)
  .then(() => {
    pauseVideo();
    displayTitle();
  })
    .then(sleep.bind(null, 500 * 3))
    .then(highlightTitle)
    .then(sleep.bind(null, 2000 * 3))
    .then(resetTitle)
}

async function runAsync() {
  resetTitle();
  playVideo();

  await sleep(1000);
  pauseVideo();
  displayTitle();

  await sleep(500);
  highlightTitle();

  await sleep(2000);
  resetTitle();
}


function resetTitle() {
  log('제목을 초기화합니다');
  title.classList.remove('visible', 'highlight');
}

function playVideo() {
  log('영상을 재생합니다');
  player.play();
}

function pauseVideo() {
  log('영상을 멈춥니다');
  player.pause();
}

function displayTitle() {
  log('제목을 표시합니다');
  title.classList.add('visible');
}

function highlightTitle() {
  log('제목을 강조합니다');
  title.classList.add('highlight');
}

function log(message) {
  let logger = document.querySelector('#logger');
  let l = document.createElement('div');
  l.textContent = `[${new Date().toISOString().slice(11, -5)}] ${message}`;
  logger.prepend(l);
}