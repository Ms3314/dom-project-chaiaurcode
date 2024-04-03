function stack(color) {
  document.getElementById(color).addEventListener('click', function () {
    change(color);
  });
}

function change(color) {
  document.querySelector('body').style.background = color;
}

stack('grey');
