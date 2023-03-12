let out = document.querySelector('#large');
let fullOut = document.querySelector('#small');
let buttons = document.querySelectorAll('button');
buttons.forEach((b) => {
  if (b.dataset.val != null) b.addEventListener('click', UpdateVal);
  else if (b.dataset.op != null) b.addEventListener('click', UpdateOp);
  else if (b.dataset.func != null) b.addEventListener('click', UpdateFunc);
});

let prevOp = null;

function UpdateVal(e) {
  out.textContent += e.target.dataset.val;
}

function UpdateOp(e) {
  const currOp = e.target.dataset.op;
  out.textContent += currOp;
  let inputs = GetInVals();
  if (inputs !== null) {
    out.textContent = Operate(inputs.a, inputs.b, prevOp) + currOp;
  }
  prevOp = currOp;
}

function GetInVals() {
  let arr = out.textContent.split(/[+\-*/]+/);
  console.log(arr);
  if (prevOp !== null) {
    return { a: Number(arr[0]), b: Number(arr[1]) };
  }
  return null;
}

function UpdateFunc(e) {
  const func = e.target.dataset.func;
  switch (func) {
    case 'eval':
      let inputs = GetInVals();
      if (inputs !== null) {
        out.textContent = Operate(inputs.a, inputs.b, prevOp);
      }
      break;

    default:
      break;
  }
}

function Operate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      break;
  }
}
