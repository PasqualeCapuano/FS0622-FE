//---------------------------------------------------

function toggleMenu() {
  document.getElementById("box-show").classList.toggle("mostra");
}

//---btn big font
var slider = document.getElementById("myRange");

var fontSize = document.getElementById('font-size');

document.getElementById("btn-small").addEventListener("click", function () {
  document.querySelector(".cambia").style.fontSize = "20px";
  slider.value = 1;
  fontSize.innerHTML = '20px';
});

document.getElementById("btn-big").addEventListener("click", function () {
  document.querySelector(".cambia").style.fontSize = "100px";
  slider.value = 5;
  fontSize.innerHTML = '100px';
});

//---starter font size

fontSize.innerHTML = '20px';

slider.oninput = function () {
  if (this.value == 1) {
    document.querySelector(".cambia").style.fontSize = "20px";
    document.querySelector(".slider").style.backgroundcolor = "red";
    fontSize.innerHTML = '20px';
  } else if (this.value == 2) {
    document.querySelector(".cambia").style.fontSize = "40px";
    fontSize.innerHTML = '40px';
  } else if (this.value == 3) {
    document.querySelector(".cambia").style.fontSize = "60px";
    fontSize.innerHTML = '60px';
  } else if (this.value == 4) {
    document.querySelector(".cambia").style.fontSize = "80px";
    fontSize.innerHTML = '80px';
  } else if (this.value == 5) {
    document.querySelector(".cambia").style.fontSize = "100px";
    fontSize.innerHTML = '100px';
  }
}

//---btn color

document.getElementById("btn-dark").addEventListener("click", function () {
  document.querySelector(".cambia").style.color = "#425F57";
});

document.getElementById("btn-light").addEventListener("click", function () {
  document.querySelector(".cambia").style.color = "#A8E890";
});

//---btn uppercase

document.getElementById("btn3").addEventListener("click", function () {
  document.querySelector(".cambia").style.textTransform = "uppercase";
});

//---btn hidden

document.getElementById("btn4").addEventListener("click", function () {
  document.querySelector(".cambia").style.visibility = "hidden";
});

//---btn visibile

document.getElementById("btn5").addEventListener("click", function () {
  document.querySelector(".cambia").style.visibility = "visible";
});

//---btn lowercase

document.getElementById("btn6").addEventListener("click", function () {
  document.querySelector(".cambia").style.textTransform = "lowercase";
});

//---------------------------------------------------

//---list tasks

let lista = document.querySelectorAll('li');

for (var i = 0; i < lista.length; i++) {
  lista[i].addEventListener('mouseover', function () {
    this.classList.add('selezione');
  });
  lista[i].addEventListener('mouseout', function () {
    this.classList.remove('selezione');
  });
  lista[i].addEventListener('click', function () {
    this.classList.toggle('fatto');
  });
}
