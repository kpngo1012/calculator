const numPad = document.querySelector("div");
const operators = document.querySelector("div");
const controls = document.querySelector("div");
const display = document.querySelector("div");

for (let i = 0; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.className = "num";
  btn.textContent = i;
  numPad.appendChild(btn);
}

const opSymbols = ['+', '-', '*', '/', '=', '.'];
opSymbols.map(symbol => {
  const operator = document.createElement("button");
  operator.className = 'operators';
  operator.textContent = symbol;
  operators.appendChild(operator);
})

const clearBtn = document.createElement("button");
clearBtn.className = 'clear';
clearBtn.textContent = 'clear';
controls.appendChild(clearBtn);






