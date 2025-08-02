function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator) {
  switch (operator) {
    case '+': return add(num1, num2).toFixed(2);
    case '-': return subtract(num1, num2).toFixed(2);
    case '*': return multiply(num1, num2).toFixed(2);
    case '/': 
      if (num2 === 0) { text = "don't you know you're not supposed to divide by 0" }
      else { return divide(num1, num2).toFixed(2); }
  }
}

function evaluate(string) {
  let valid = checkValidity(string);
  if (valid) {
    return operate(operator);
  }
}