const numPad = document.querySelector("div");
const operators = document.querySelector("div");
const controls = document.querySelector("div");
const display = document.querySelector("div");
const inputField = document.querySelector("input");

//numbers field
for (let i = 0; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.className = "num";
  btn.textContent = i;
  numPad.appendChild(btn);
}

//operator symbols
const opSymbols = ['+', '-', '*', '/', '=', '.'];
opSymbols.map(symbol => {
  const operator = document.createElement("button");
  operator.className = 'operators';
  if (symbol === '=') operator.setAttribute("id", "equal");
  operator.textContent = symbol;
  operators.appendChild(operator);
})

//clear button - under controls 
const clearBtn = document.createElement("button");
clearBtn.className = 'clear';
clearBtn.textContent = 'clear';
controls.appendChild(clearBtn);

let stringQuery = "";

//allows display to populate as you click the btn
for (const child of numPad.children) {
  child.addEventListener("click", () => {
    if (child.className === 'clear') { 
      clearBtn.addEventListener("click", () => { 
        inputField.value = ''});
        stringQuery = "";
      } else if (child.id === "equal") {
        console.log(`Under child.id condition: ${inputField.value}`);
        inputField.value = operate(inputField.value) + " ";
        stringQuery = inputField.value;
      } else {
      inputField.value += child.textContent + ' ';
      stringQuery = inputField.value;
      console.log(`String Query: ${stringQuery}`);
    }
});
}











