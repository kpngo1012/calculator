
//numbers field
for (let i = 0; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.className = "num";
  btn.textContent = i;
  numPad.appendChild(btn);
}

// operator symbols
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

// allows display to populate as you click the btn
for (const child of container.children) {
  child.addEventListener("click", (e) => {
    let target = e.target;
  
    if (!target) return;

    // if (checkValidity(stringQuery)) {
    //         result = operate(stringQuery);
    //         stringQuery = result;
    //         inputField.value = result;
    //         console.log(`StringQuery after operation: ${stringQuery};`)
    //       } else {
    //         console.log(`String not valid to be evaluated yet`);
    //         // break;
    //       }
    
    switch (target.className) {
      case 'clear':
        inputField.value = '';
        stringQuery = "";
        break;
      case 'operator': {
        if (target.id === "decimal") {
          inputField.value += target.textContent;
          stringQuery = inputField.value;
          break;
        } else {
          console.log(`TARGET.TEXTCONTENT IN OPERATOR: ${target.textContent}`);
          console.log(`StringQuery before assignment: ${stringQuery}`);
          console.log(`StringQuery length: ${stringQuery.length}`);
          //do string length and validty check here
              if (checkValidity(stringQuery)) {
            result = operate(stringQuery);
            stringQuery = result;
            inputField.value = result;
            console.log(`StringQuery after operation: ${stringQuery};`)
          } else {
            console.log(`String not valid to be evaluated yet`);
            // break;
          }


          if (target.id === 'equal') {
            ok = true; 
            console.log(`ok: ${ok}`);
            break; 
          } 
          inputField.value += ` ${target.textContent} `;
          stringQuery = inputField.value;
          console.log(`StringQuery after assignment: ${stringQuery}`);
          break;
          
        }} 
      case 'num': {
          console.log(`TARGET.TEXTCONTENT IN NUMPAD: ${target.textContent}`);
          console.log(`inputfiled.value in numpad: ${inputField.value}`);
          console.log(`StringQuery before assignment in numpad: ${stringQuery}`);
          console.log(`ok before condition: ${ok} & ${typeof ok}`);
              if (checkValidity(stringQuery)) {
            result = operate(stringQuery);
            stringQuery = result;
            inputField.value = result;
            console.log(`StringQuery after operation: ${stringQuery};`)
          } else {
            console.log(`String not valid to be evaluated yet`);
            // break;
          }

        inputField.value += target.textContent;
        stringQuery = inputField.value;
        console.log(`StringQuery after assignment when numbers are pressed: ${stringQuery}`);
        break;
    }}
  })
};












