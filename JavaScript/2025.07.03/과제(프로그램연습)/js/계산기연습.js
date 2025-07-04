let addLet = document.querySelector('#add'); // 더하기에 온클릭 생성
addLet.onclick = addOn;
let subLet = document.querySelector('#sub'); // 빼기에 온클릭 생성
subLet.onclick = subOn;
let multyLet = document.querySelector('#multy'); // 곱하기에 온클릭 생성
multyLet.onclick = multyOn;
let dividLet = document.querySelector('#divid'); // 나누기에 온클릭 생성
dividLet.onclick = dividOn;


function addOn() {
  let numOne = Number(document.querySelector('#num1').value);
  let numTwe = Number(document.querySelector('#num2').value);
  let dap = document.querySelector('#result');

  dap.value = numOne + numTwe;
}

function subOn() {
  let numOne = Number(document.querySelector('#num1').value);
  let numTwe = Number(document.querySelector('#num2').value);
  let dap = document.querySelector('#result');

  dap.value = numOne - numTwe;

}

function multyOn() {
  let numOne = Number(document.querySelector('#num1').value);
  let numTwe = Number(document.querySelector('#num2').value);
  let dap = document.querySelector('#result');

  dap.value = numOne * numTwe;
}

function dividOn() {
  let numOne = Number(document.querySelector('#num1').value);
  let numTwe = Number(document.querySelector('#num2').value);
  let dap = document.querySelector('#result');

  dap.value = numOne / numTwe;
}