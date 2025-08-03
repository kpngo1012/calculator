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

function operate(num1, num2, operator) {
  switch (operator) {
    case '+': return add(num1, num2).toFixed(2);
    case '-': return subtract(num1, num2).toFixed(2);
    case '*': return multiply(num1, num2).toFixed(2);
    case '/': 
      if (num2 === 0) {
        text = "don't you know you're not supposed to divide by 0";
        return text; }
      else { return divide(num1, num2).toFixed(2); }
  }
}

// function checkValidity(currentInput, lastBtnPressed) {
//   let arr = currentInput.split(" ").filter((char => char.match(/\S/)));
//   if (arr.length < 3) {
//     if (arr.length === 2 && opSymbols.includes(lastBtnPressed)) {
//       console.log(`when array has 2 elements and last btn pressed is an operator`);
//       return false;
//     }
//   } else { 
//     console.log(arr);
//     let expObj = { num1: arr[0], num2: arr[2], operator: arr[1] };
//     console.log(expObj);
//     if (!(opSymbols.includes(expObj.operator))) { return false; }
//     if (!( 
//      (expObj["num1"].match(regexpFloat) || expObj["num1"].match(/\d/)) &&
//      (expObj["num2"].match(regexpFloat) || expObj["num2"].match(/\d/))
//     )) return false;

//     num1 = parseFloat(expObj.num1);
//     num2 = parseFloat(expObj.num2);
//     operator = expObj.operator;

//     return true;
//   }
// }

function checkValidity(currentInput) {
  let arr = currentInput.split(" ").filter((char => char.match(/\S/)));
  expObj = { num1: arr[0], num2: arr[2], operator: arr[1] };
  console.log(expObj);
  for (const property in expObj) { if (!expObj[property]) return false; }

  num1 = parseFloat(expObj.num1);
  num2 = parseFloat(expObj.num2);
  operator = expObj.operator;

  return true;
}

function evaluate(currentInput, lastBtnPressed) {
  let valid = checkValidity(currentInput, lastBtnPressed);
  if (valid) {
    stringQuery = operate(num1, num2, operator);
    prevResult = stringQuery;
    console.log(`String Query: ${stringQuery} ${typeof stringQuery}`);
  } else { //currentInput = what's in the input field right now
    if (!(prevResult === currentInput)) { stringQuery = ""; } //if user presses "=" again, the field wont reset
    stringQuery = currentInput;
    if (opSymbols.includes(lastBtnPressed)) { stringQuery = expObj.num1; }
  }
  return stringQuery;
}