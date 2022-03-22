/**
 * NIGHTMARE
 * =========
 * nightmare 문제는 별도의 힌트나 해설을 제공하지 않습니다, 레퍼런스 코드는 제공됩니다.
 */

// _.memoize는 callback 함수에 메모이제이션(memoization)을 적용합니다.
// 메모이제이션은 이미 해결한 문제는 다시 풀지 않는 기법입니다.
// 함수의 호출은 항상 어떤 상태로부터 시작합니다.
// 함수의 호출과 함께 전달받은 인자들 또는 함수의 실행에 영향을 미치는 전역변수들이 이 상태를 결정합니다.
// 같은 상태에서 출발한 함수는 항상 같은 결과를 리턴(해야)합니다.

// 예를 들어, 아래의 함수 add는 두 인자의 값이 바로 함수의 상태입니다.
//  function add(a, b) {
//      return a + b;
//  }
// add(3, 5)는 항상 8을 리턴하고, add(2, 7)은 항상 9를 리턴합니다.
// 함수의 상태마다 하나의 문제가 있는 셈입니다.
// 문제를 해결할 때 마다 해당 문제의 답을 기록(메모)해두고,
// 다음에 동일한 문제를 풀 상황이 오면, 앞서 기록한 답을 활용합니다.
// 이 경우, 처음 문제를 풀 때 들였던 노력(연산)이 필요 없습니다.
// 예시로 보여준 add 함수의 경우, 연산이 많이 복잡하지 않아 메모이제이션의 이점이 와닿지 않을 수 있습니다.
// _.memoize를 완성한 후에 피보나치 함수에 적용하여 비교해 보시기 바랍니다.
// 단, 재귀 함수는 함수가 할당된 변수에 메모이제이션이 적용된 함수를 재할당해야 합니다.(테스트 케이스 참고)
_.memoize = function (func) {
  // TODO: 여기에 코드를 작성합니다.
  let memo = {};
  return function (...rest) {
    let key = JSON.stringify(rest);
    if (!memo[key]) memo[key] = func(...rest);
    return memo[key];
  }
};

// _.throttle은 입력으로 전달되는 시간(ms, 밀리초)동안에 callback 함수를 단 한번만 실행되는 함수를 반환합니다.
// 리턴되는 함수는 구간의 길이가 입력의 크기인 임의의 구간에서 callback 함수를 한 번만 실행되어야 합니다.
// 예를 들어, _.throttle(func, 100)가 리턴하는 함수는 적어도 100ms 간격을 사이에 두고 callback 함수를 실행해야 합니다.
_.throttle = function (func, wait) {
  // TODO: 여기에 코드를 작성합니다.
  let available = true;
  return function () {
    if (available) {
      available = false;
      setTimeout(function () {
        func();
        available = true;
      }, wait);
    }
  }
};