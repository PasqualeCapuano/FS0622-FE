// Selezionare le immagini
const slides = document.querySelectorAll(".slide");

// Array di immagini con spostamento
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// Bottone per attivare lo spostamento
const nextSlide = document.querySelector(".btn-next");

// Immagine di partenza
var curSlide = 0;

// Ultima slide selezionata
var maxSlide = slides.length - 2;

//pallini 1,2,3,4
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');

// Divisione visualizzazione immagini carosello per screen size
var smallScreen = window.matchMedia("(min-width: 768px)"); // Small screen size

function scrollSmall(smallScreen) {
    if (smallScreen.matches) {
        maxSlide = slides.length - 1;
    }
}

var mediumScreen = window.matchMedia("(min-width: 992px)"); // Medium screen size

function scrollMedium(mediumScreen) {
    if (mediumScreen.matches) {
        maxSlide = slides.length - 3;
    }
}

var bigScreen = window.matchMedia("(min-width: 1200px)"); // Big screen size

function scrollBig(bigScreen) {
    if (bigScreen.matches) {
        maxSlide = slides.length - 4;
    }
}

// Funzione per cambiare il colore ai pallini
function cambioColore() {
    if (curSlide === 0 || curSlide === 1) {
        startPallini();
    } else if (curSlide === 2 ) {
        btnOne.style.backgroundColor = "#dadada";
        btnTwo.style.backgroundColor = "#ff530a";
        btnThree.style.backgroundColor = "#dadada";
        btnFour.style.backgroundColor = "#dadada";
    } else if (curSlide === 3 ) {
        btnOne.style.backgroundColor = "#dadada";
        btnTwo.style.backgroundColor = "#dadada";
        btnThree.style.backgroundColor = "#ff530a";
        btnFour.style.backgroundColor = "#dadada";
    } else if (curSlide === 4 || curSlide === 5) {
        btnOne.style.backgroundColor = "#dadada";
        btnTwo.style.backgroundColor = "#dadada";
        btnThree.style.backgroundColor = "#dadada";
        btnFour.style.backgroundColor = "#ff530a";
    }
}

// Style dei pallini in posizione iniziale
function startPallini() {
    btnOne.style.backgroundColor = "#ff530a";
    btnTwo.style.backgroundColor = "#dadada";
    btnThree.style.backgroundColor = "#dadada";
    btnFour.style.backgroundColor = "#dadada";
}

// EventListener del bottone per cambiare slide
nextSlide.addEventListener("click", function () {
    // Controllo della slide
    if (curSlide === maxSlide) {
        curSlide = 0;
        cambioColore();
    } else {
        curSlide++;
        cambioColore();
    }
    // Spostamento slide
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});


// Carosello scorrevole con il click sui pallini
btnOne.addEventListener("click", function () {
    curSlide = 0;
    cambioColore();
    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

btnTwo.addEventListener("click", function () {
    curSlide = 2;
    cambioColore();
    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

btnThree.addEventListener("click", function () {
    curSlide = 3;
    cambioColore();
    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;

    });
});

btnFour.addEventListener("click", function () {
    curSlide = 4;
    cambioColore();
    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

startPallini();
scrollSmall(smallScreen);
scrollMedium(mediumScreen);
scrollBig(bigScreen);