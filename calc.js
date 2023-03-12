let out = document.querySelector('#large');
let fullOut = document.querySelector('#small');
let buttons = document.querySelectorAll('button');
buttons.forEach((b) => {
  b.addEventListener('click', Update);
});

let prevOp = null;

function Update(e) {
  if (e.target.dataset.val != null) {
    out.textContent += e.target.dataset.val;
  } else if (e.target.dataset.op != null) {
    const currOp = e.target.dataset.op;
    out.textContent += currOp;
    let arr = out.textContent.split(/[+\-*/]+/);
    if (arr.length === 3) {
      out.textContent = Operate(Number(arr[0]), Number(arr[1]), prevOp) + currOp;
    }
    prevOp = currOp;
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
