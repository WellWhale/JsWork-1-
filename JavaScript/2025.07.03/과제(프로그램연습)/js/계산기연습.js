// 공통 계산 함수
function calculate(operation) {
  const numOne = Number(document.querySelector('#num1').value);
  const numTwo = Number(document.querySelector('#num2').value);
  const resultField = document.querySelector('#result');

  let result;

  switch (operation) {
    case 'add':
      result = numOne + numTwo;
      break;
    case 'sub':
      result = numOne - numTwo;
      break;
    case 'multy':
      result = numOne * numTwo;
      break;
    case 'divid':
      result = numOne / numTwo;
      break;
    default:
      result = 'Invalid operation';
  }

  resultField.value = result;
}

// 버튼에 이벤트 연결
document.querySelector('#add').onclick = () => calculate('add');
document.querySelector('#sub').onclick = () => calculate('sub');
document.querySelector('#multy').onclick = () => calculate('multy');
document.querySelector('#divid').onclick = () => calculate('divid');