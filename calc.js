let buttons = document.querySelectorAll('button');
buttons.forEach((b) => {
  b.addEventListener('click', Update);
});

function Update(e) {
  console.log(e.target.dataset.val);
}
