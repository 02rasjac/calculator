let out = document.querySelector('#large');
let fullOut = document.querySelector('#small');
let buttons = document.querySelectorAll('button');
buttons.forEach((b) => {
  b.addEventListener('click', Update);
});

function Update(e) {
  if (e.target.dataset.val != null) {
    out.textContent += e.target.dataset.val;
  } else if (e.target.dataset.op != null) {
    out.textContent += e.target.dataset.op;
  }
}
