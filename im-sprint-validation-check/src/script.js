// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordRetype = document.querySelector('#password-retype');
const button = document.querySelector('#button');
const bool = [ false, false, false ];

if (bool[0] === false) {
  button.disabled = true;
}
userName.onkeyup = function () {
  if (isMoreThan4Length(userName.value)) {
    // 4글자 이상일 때
    document.querySelector('.success-message').classList.remove('hide');
    document.querySelector('.failure-message').classList.add('hide');
    console.log(bool);
    bool[0] = true;
    activateButton();
  }
  else {
    // 4글자 미만일 때
    document.querySelector('.success-message').classList.add('hide');
    document.querySelector('.failure-message').classList.remove('hide');
    console.log(bool);
    activateButton();
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}

passwordRetype.onkeyup = function () {
  if (!(isMatch(password.value, passwordRetype.value))) {
    document.querySelector('.mismatch-message').classList.remove('hide');
    console.log(bool);
    activateButton();
  }
  else {
    document.querySelector('.mismatch-message').classList.add('hide');
    console.log(bool);
    bool[1] = true;
    activateButton();
  }
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}

function isNotBlank() {
  userName.value && password.value && passwordRetype.value ? bool[2] = true : bool[2];
  // 삼항 조건 연산자
  // 조건식 ? 참이면 여기 실행 : 거짓이면 여기 실행
}

function activateButton() {
  isNotBlank();
  if (bool[0] && bool[1] && bool[2])
    button.disabled = false;
  else 
    button.disabled = true;
}
