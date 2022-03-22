const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

let num1 = '';
let num2 = '';
let bool = true;
let computed = false;
let result;


function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  switch (operator)
  {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }
  return String(result);
}

// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.

//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   // ! 위 코드(Line 19 - 21)는 수정하지 마세요.
//   if (action === 'operator' && num1 === '') {
//     alert('숫자를 먼저 입력하세요.');
//     return;
//   }
//   console.log(target);
//   console.log(action);
//   if (target.matches('button')) {
//     // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
//     // 클릭된 HTML 엘리먼트가 button이면
//     if (!computed) {
//       if (action === 'number') {
//         // 그리고 버튼의 클레스가 number이면
//         // 아래 코드가 작동됩니다.
//         if (bool) {
//           num1 += buttonContent;
//           firstOperend.textContent = num1;
//           console.log('숫자 ' + buttonContent + ' 버튼');
//         }
//         else {
//           num2 += buttonContent;
//           secondOperend.textContent = num2;
//           console.log('숫자 ' + buttonContent + ' 버튼');
//         }
//       }

//       if (action === 'operator') {
//         operator.textContent = buttonContent;
//         bool = false;
//         console.log('연산자 ' + buttonContent + ' 버튼');
//       }

//       if (action === 'decimal') {
//         // console.log('소수점 버튼');
//         if (bool) {
//           if (num1 === '')
//             num1 += '0.';
//           else if (num1.includes('.'))
//             alert("소숫점은 한 번만 사용해야 합니다.");
//           else {
//             num1 += '.';
//           }
//           firstOperend.textContent = num1;
//         }
//         else {
//           if (num2 === '')
//             num2 += '0.';
//           else if (num2.includes('.'))
//             alert("소숫점은 한 번만 사용해야 합니다.");
//           else {
//             num2 += '.';
//           }
//           secondOperend.textContent = num2;
//         }
//       }
//     }

//     if (action === 'clear') {
//       console.log('초기화 버튼');
//       bool = true;
//       computed = false;
//       num1 = '';
//       num2 = '';
//       firstOperend.textContent = 0;
//       secondOperend.textContent = 0;
//       calculatedResult.textContent = 0;
//       document.querySelector('.calculator__operator').textContent = '+';
//     }

//     if (action === 'calculate') {
//       console.log('계산 버튼');
//       calculatedResult.textContent = calculate(Number(num1), operator.textContent, Number(num2));
//       computed = true;
//     }
//   }
// });


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced = '', previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  console.log(event);
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if (bool) {
        num1 += buttonContent;
        display.textContent = num1;
      }
      else {
        num2 += buttonContent;
        display.textContent = num2;
      }
    }

    if (action === 'operator') {
      if (num2 === '') {
      operatorForAdvanced = buttonContent;
      bool = false;
      }
      else {
        num1 = calculate(Number(num1), operatorForAdvanced, Number(num2));
        display.textContent = num1;
        num2 = '';
        operatorForAdvanced = buttonContent;
      }
    }

    if (action === 'decimal') {
      if (bool) {
        if (num1 === '')
          num1 += '0.';
        else if (num1[num1.length - 1] === '.')
          num1 = num1;
        else if (num1.includes('.'))
          num1 = num1;
        else
          num1 += '.';
        display.textContent = num1;
      }
      else {
        if (num2 === '')
          num2 += '0.';
        else if (num2[num2.length - 1] === '.')
          num2 = num2;
        else if (num2.includes('.'))
          num2 = num2;
        else
          num2 += '.';
        display.textContent = num2;
      }
    }
    if (action === 'clear') {
      num1 = '';
      num2 = '';
      bool = true;
      computed = false;
      display.textContent = 0;
      operatorForAdvanced = '';
    }

    if (action === 'calculate') {
      if (operatorForAdvanced !== '') { // ! 3 enter enter enter 시 계산하지 않기 위함
        if (!computed) {
          if (num2 === '')
            num2 = num1;
          result = calculate(Number(num1), operatorForAdvanced, Number(num2));
          display.textContent = result;
          computed = true;  // ! 3 * 3 enter enter enter 시 처음 엔터에서 컴퓨티드 값 바뀌고, 아래 else문으로 진입해서 결과 출력
        }
        else {
          result = calculate(Number(result), operatorForAdvanced, Number(num2));
          display.textContent = result;
        }
      }
    }
  }
});