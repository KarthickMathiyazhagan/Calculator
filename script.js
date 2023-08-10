/*function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    const resultField = document.getElementById('result');
    try {
      resultField.value = eval(resultField.value);
    } catch (error) {
      resultField.value = 'Error';
    }
  }
  */
/*
  let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}

function erase() {
  currentInput = '';
  document.getElementById('display').value = currentInput;
}
*/

let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === "") {
    displayValue = "0";
  }
  updateDisplay();
}

updateDisplay();
