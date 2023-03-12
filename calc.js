let out = document.querySelector('#large');
let fullOut = document.querySelector('#small');
let buttons = document.querySelectorAll('button');
buttons.forEach((b) => {
  b.addEventListener('click', Update);
});

function Update(e) {
  out.textContent = e.target.dataset.val;
}
