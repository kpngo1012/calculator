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
  // checkValidity(string);
  switch (operator) {
    case '+':
      return (add(num1,num2)).toFixed(2);
    case '-':
      return subtract(num1,num2).toFixed(2);
    case '*':
      return multiply(num1, num2).toFixed(2);
    case '/':
      return divide(num1, num2).toFixed(2);
  }
}

//for testing purposes only
// const opSymbols_test = ['+', '-', '*', '/', '=', '.'];
//the bug is that when arr.length = 5, the code immediately calls operate()
//thats why it doesnt take another number

function checkValidity(string) {
  let arr = string.split(" ");
  // console.log(`Array before filter: ${Array.from(string)}`);
  let filtered = arr.filter(char => char.match(/\S/)); //convert string to array then filter out empty spaces
  console.log(`Array after filter: ${arr}`);
  num1 = filtered[0];
  operator = filtered[1];
  num2 = filtered[2];
  console.log(`Before matching: num1: ${num1} | num2: ${num2} | operator: ${operator}`); //more debug purposes
  
  if (!(operator && num2)) {
    console.log("Needs an operator and a second number");
    return false; 
  } else {
    if (opSymbols.includes(filtered[1]) && //check for valid math operators and numbers (includes float and integers)
    ((num1.match(regexpFloat) || num1.match(/\d/)) &&
     (num2.match(regexpFloat) || num2.match(/\d/))
    )) {
      console.log(`Valid array? ${filtered}`); //debug purposes
      num1 = parseFloat(filtered[0]);
      operator = arr[1];
      num2 = parseFloat(filtered[2]);
      console.log(`num1: ${num1} | num2: ${num2} | operator: ${operator}`); //more debug purposes
      return true;
    } else {
      console.log("enter a valid operation in this format: # (operator) #");
      return false;
    }}
  }


// if (checkValidity("3 * 3")) { console.log(operate()) }
// console.log(`Num1: ${num1} | Num2: ${num2} | Operator: ${operator}`);
