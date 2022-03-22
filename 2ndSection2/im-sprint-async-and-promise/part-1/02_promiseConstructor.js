const sleep = (wait) => {
  return new Promise((resolve) => {
    setTimeout(resolve, wait);
  });
}

// Promise 는 빌트인 객체의 생성자 함수
// new로 호출할 수 있다.
// new Promise => 프로미스 객체를 만든다
// 프로미스 객체? => 비동기 처리의 상태와 결과를 관리하는 객체
// resolve : 프로미스 객체의 상태를 fulfilled로 변경하고, 프로미스 결과에 값을 저장
// reject  : 프로미스 객체의 상태를 rejected로 변경하고, 프로미스 결과에 에러를 저장
