function addr() {
  let suOne = parseFloat(document.querySelector('#num1').value);
  let suTwo = parseFloat(document.querySelector('#num2').value);
  let resultOne = document.querySelector('#result');

  if (isNaN(suOne) || isNaN(suTwo)) {
    alert("숫자를 올바르게 입력하세요.");
    resultOne.value = "";
    return;
  }

  resultOne.value = suOne + suTwo;
}