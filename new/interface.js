//01.CREATE NUMBERS PAD
for (let i = 0; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.className = "num";
  btn.textContent = i;
  numPad.appendChild(btn);
}

//02.CREATE OPERATORS PAD
opSymbols.map(symbol => {
  const operator = document.createElement("button");
  operator.className = 'operator';
  if (symbol === '=') operator.setAttribute("id", "equal");
  if (symbol === '.') operator.setAttribute("id", "decimal");
  operator.textContent = symbol;
  operators.appendChild(operator);
});

//03.CREATE MODIFICATIONS BUTTONS
modSymbols.forEach((symbolObject) => {
  const modBtn = document.createElement("button");
  modBtn.className = 'modify';
  modBtn.id = symbolObject.name;
  modBtn.textContent = symbolObject.symbol;
  modifications.appendChild(modBtn);
});

//04.CREATE RESET BTN
const clearBtn = document.createElement("button");
clearBtn.className = 'clear';
clearBtn.textContent = 'clear';
controls.appendChild(clearBtn);

//05.CREATE TEXT NODES (FOR DISPLAYING ERRORS)
function displayError(text) {
const error = document.createElement("p");
error.textContent = text;
errorField.appendChild(error);
}

//06.CHECK IF INPUT FIELD IS EMPTY (FOR WHEN USER STARTS WITH AN OPERATOR)
function checkEmptiness(inputfield) {
  if ( inputfield === "") {
    text = "invalid expression. need to start with a number";
    return true;
  } else { return false; }
}

//07.GET THE LAST ELEMENT FROM AN ARRAY
function checkDecimal(string) {
  let arr = string.split(" ");
  return (arr[arr.length - 1].includes(".")) ? true : false;
}

//08.ATTACH EVENT LISTENERS
for (const child of container.children) {
  child.addEventListener("click", (e) => {
    let target = e.target;
    if (!target) return;

    switch (target.className) {
      case 'clear':
        inputField.value = '';
        stringQuery = "";
        break;
      case 'operator': {
        if (errorField.firstChild) break;
        if (checkEmptiness(inputField.value)) {
          displayError(text);
          break;
        } else { //needs to make the calculator work now
        inputField.value += ` ${target.textContent} `;
        result = evaluate(inputField.value);
        break; 
        }} 
      case 'modify': {
        if (errorField.firstChild) break;
        if (checkEmptiness(inputField.value)) { displayError(text); break; }
        else {
          switch (target.id) {
            case 'decimal':
              if (checkDecimal(inputField.value)) break; 
              inputField.value += target.textContent;
              break;
            case 'equal':
              break;
        }} break; }
      case 'num': {
        let errorMsg = errorField.firstChild;
        if (errorMsg) errorField.removeChild(errorMsg);
        inputField.value += target.textContent;
        break;
      }
    }
  })
}