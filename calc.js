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
  let arr = out.textContent.split(/[+\-*/]+/);
  if (arr.length === 3) {
    out.textContent = Operate(Number(arr[0]), Number(arr[1]), prevOp) + currOp;
  }
  prevOp = currOp;
}

function UpdateFunc(e) {}

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
