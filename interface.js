const container = document.querySelector(".container");
const numPad = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const controls = document.querySelector(".controls");
const display = document.querySelector(".display");
const inputField = document.querySelector("#input");

//numbers field
for (let i = 0; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.className = "num";
  btn.textContent = i;
  numPad.appendChild(btn);
}

// operator symbols
const opSymbols = ['+', '-', '*', '/', '=', '.'];
opSymbols.map(symbol => {
  const operator = document.createElement("button");
  operator.className = 'operator';
  if (symbol === '=') operator.setAttribute("id", "equal");
  if (symbol === '.') operator.setAttribute("id", "decimal");
  operator.textContent = symbol;
  operators.appendChild(operator);
})

//clear button - under controls 
const clearBtn = document.createElement("button");
clearBtn.className = 'clear';
clearBtn.textContent = 'clear';
controls.appendChild(clearBtn);

let stringQuery = "";

// allows display to populate as you click the btn
for (const child of container.children) {
  // child.addEventListener("click", () => {
  //   if ((child.child).className === 'clear') {
  //     clearBtn.addEventListener("click", () => { 
  //       inputField.value = ''});
  //       stringQuery = "";
  //     } else if (child.id === "equal") {
  //       console.log(`Under child.id condition: ${inputField.value}`);
  //       inputField.value = operate(inputField.value) + " ";
  //       stringQuery = inputField.value;
  //     } else {
  //     inputField.value += child.textContent + ' ';
  //     stringQuery = inputField.value;
  //     console.log(`String Query: ${stringQuery}`);
  //   }
  // console.log(child);
  child.addEventListener("click", (e) => {
    let target = e.target;
  
    if (!target) return;
    
    switch (target.className) {
      case 'clear':
        inputField.value = '';
        stringQuery = "";
        break;
      case 'operator': {
        if (target.id === "decimal") { inputField.value += target.textContent; stringQuery = inputField.value;}
        else if (target.id === "equal") { inputField.value += operate(stringQuery); } //then reset the inputfield} 
        else { inputField.value += ` ${target.textContent} `; stringQuery = inputField.value;}
        break;
        } 
      case 'num': 
        inputField.value += target.textContent;
        stringQuery = inputField.value;
        break;
      
    }
  })
};












