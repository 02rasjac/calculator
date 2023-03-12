let out = document.querySelector('#large');
let fullOut = document.querySelector('#small');
let buttons = document.querySelectorAll('button');
buttons.forEach((b) => {
  if (b.dataset.val != null) b.addEventListener('click', UpdateVal);
  else if (b.dataset.op != null) b.addEventListener('click', UpdateOp);
  else if (b.dataset.func != null) b.addEventListener('click', UpdateFunc);
});

let period = document.querySelector('button[data-val="."]');
period.addEventListener('click', () => SetPeriod(true));

let prevOp = null;

function UpdateVal(e) {
  out.textContent += e.target.dataset.val;
}

function UpdateOp(e) {
  SetPeriod(false);
  const currOp = e.target.dataset.op;
  out.textContent += currOp;
  let inputs = GetInVals();
  if (inputs !== null) {
    out.textContent = Round(Operate(inputs.a, inputs.b, prevOp)) + currOp;
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
  SetPeriod(false);
  const func = e.target.dataset.func;
  switch (func) {
    case 'eval':
      let inputs = GetInVals();
      if (inputs !== null) {
        out.textContent = Round(Operate(inputs.a, inputs.b, prevOp));
        prevOp = null;
      }
      break;
    case 'clr':
      out.textContent = '';
      prevOp = null;
    default:
      break;
  }
}

function SetPeriod(disabled) {
  if (disabled) period.setAttribute('disabled', true);
  else period.removeAttribute('disabled');
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

const Round = (x) => Math.round((x + Number.EPSILON) * 100000) / 100000;
