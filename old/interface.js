for (let i = 0; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.className = "num";
  btn.textContent = i;
  numPad.appendChild(btn);
} //generate numbers button

opSymbols.map(symbol => {
  const operator = document.createElement("button");
  operator.className = 'operator';
  if (symbol === '=') operator.setAttribute("id", "equal");
  if (symbol === '.') operator.setAttribute("id", "decimal");
  operator.textContent = symbol;
  operators.appendChild(operator);
}) //generate operators buttons, set unique id for equal and decimal

const clearBtn = document.createElement("button");
clearBtn.className = 'clear';
clearBtn.textContent = 'clear';
controls.appendChild(clearBtn);

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
        if (target.id === "decimal") { //if decimal, we don't want spaces between numbers
          inputField.value += target.textContent;
          stringQuery = inputField.value;
          break;
        } else if (target.id === 'equal') { //
          ok = true; //let computer know user just computed a result without operator
          if (checkValidity(stringQuery)) {
            stringQuery = operate(stringQuery);
            inputField.value = stringQuery;
            break;
          }
        } else {
          console.log(`INPUTFIELD.VALUE: ${inputField.value} ${target.textContent}`);
     
          if (checkValidity(`${inputField.value} ${target.textContent}`)) {
            stringQuery = operate(stringQuery);
            inputField.value = stringQuery;
          } else {
  
       
          }
          inputField.value += ` ${target.textContent} `;
          stringQuery = inputField.value;
          console.log(stringQuery);
          break;
        }} 
      case 'num': {
        inputField.value += target.textContent;
        stringQuery = inputField.value;
        break;
    }}
  })
};












