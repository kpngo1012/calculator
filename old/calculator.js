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

function operate(string) {
  switch (operator) {
    case '+':
      return (add(num1,num2)).toFixed(2);
    case '-':
      return subtract(num1,num2).toFixed(2);
    case '*':
      return multiply(num1, num2).toFixed(2);
    case '/':
      return (num2 === 0) ? "don't you know you're not supposed to divide by zero" : divide(num1, num2).toFixed(2);
  }
}

function checkValidity(string) {
  let arr = string.split(" ");
  let filtered = arr.filter(char => char.match(/\S/));
  num1 = filtered[0];
  operator = filtered[1];
  num2 = filtered[2];
  console.log(`Array filtered: ${filtered}`);
  console.log(parseFloat(num2));
  console.log(`Before condition -- num1: ${num1} | operator: ${operator} | num2: ${num2}`);

  if ((filtered.length === 3) && (opSymbols.includes(operator) && isNaN(parseFloat(num2)))) {
    operator = num2;
    num2 = "";
    stringQuery = `${num1} ${operator} ${num2}`;
    console.log(`reassigned operator: ${operator} | reassigned num2: ${num2}`);
    return false; 
  } else {
    console.log(`num1: ${num1} | operator: ${operator} | num2: ${num2}`);
    if (opSymbols.includes(operator) && //check for valid math operators and numbers (includes float and integers)
    ((num1.match(regexpFloat) || num1.match(/\d/)) &&
     (num2.match(regexpFloat) || num2.match(/\d/))
    )) {
      num1 = parseFloat(filtered[0]);
      operator = filtered[1];
      num2 = parseFloat(filtered[2]);
      return true;
    } else {
      return false;
    }}
  }

  


