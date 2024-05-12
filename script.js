// script.js

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteChar() {
  const result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
  const expression = document.getElementById('result').value;
  const result = eval(expression);
  document.getElementById('result').value = result;
}
