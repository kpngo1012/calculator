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

let num1, num2, operator;

function operate(string) {
  checkValidity(string);
  switch (operator) {
    case '+':
      return add(num1,num2);
    case '-':
      return subtract(num1,num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

//for testing purposes only
// const opSymbols_test = ['+', '-', '*', '/', '=', '.'];

function checkValidity(string) {
  let arr = string.split(" ");

  if (opSymbols.includes(arr[1]) && 
    (arr[0].match(/\d/) && arr[2].match(/\d/))) {
    num1 = parseInt(arr[0]);
    operator = arr[1]
    num2 = parseInt(arr[2]);
    return true;
  } else {
    console.log("enter a valid operation in this format: # (operator) #");
  }
  
  
}

// if (checkValidity("3 * 3")) { console.log(operate()) }
// console.log(`Num1: ${num1} | Num2: ${num2} | Operator: ${operator}`);
