alert(document.querySelector(".button").getAttribute('class'));

function changer(color) {
  document.getElementById(color).addEventListener('click', function () {
    document.querySelector('body').style.background = color;;
  });
}


