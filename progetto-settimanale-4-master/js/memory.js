let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];

//libreria per icone
//https://html-css-js.com/html/character-codes/
let arrayComparison = [];
let min = 0;
let sec = 0;

document.body.onload = startGame();

function startGame() {
    min = 0;
    sec = 0;

    let container = document.querySelector('.icon-grid');
    container.innerHTML = '';

    let arrayShuffle = shuffle(arrayAnimali);

    arrayShuffle.forEach((ele) => {
        let carte = document.createElement('div');
        let simbolo = document.createElement('div');

        container.appendChild(carte);
        carte.appendChild(simbolo);
        simbolo.className = 'icon';
        simbolo.innerText = ele;
        simbolo.addEventListener('click', displayIcon);
    })

}

//----------------------------------------------------------------------------------

function tempo() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    let minutaggio = document.querySelector('.timer');
    minutaggio.innerText = 'Tempo: ' + min + ' min ' + sec + ' sec';
}

setInterval(function () {
    tempo()
}, 1000)

//----------------------------------------------------------------------------------

function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

//----------------------------------------------------------------------------------

var iconsFind;
function displayIcon() {

    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    iconsFind = document.getElementsByClassName('find');

    this.classList.toggle("show");

    arrayComparison.push(this);

    var len = arrayComparison.length;

    var dealing = new Audio('../media/dealing.wav');
    var guessed = new Audio('../media/guessed.wav');

    dealing.play();

    if (len === 2) {

        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML && arrayComparison[0] != arrayComparison[1]) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
            guessed.play();

        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function (item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function () {

                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function (item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
    endGame()
}


//----------------------------------------------------------------------------------

let endgame = document.querySelector('#modal')

var victory = new Audio('../media/victory.wav');
var music = new Audio('../media/countdownmusic.mp3');



function endGame() {

    if (iconsFind.length == 24) {
        modal.className = 'active';
        victory.play();
        music.pause();
        music.volume = 0.5;
    }

    clearInterval(tempo())
    let time = document.querySelector('#tempoTrascorso');
    time.innerText = min + 'min' + sec + 'sec';
}

function rigioca() {
    startGame();
    modal.className = '';
    victory.pause();
    music.play();
}

