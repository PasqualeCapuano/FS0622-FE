const pGreco = 3.14;
var nomeUno = 'Aldo';
let nomeDue = 'cliente';

document.getElementById('concatena').innerHTML = `${nomeUno}, ${nomeDue}, ${pGreco}`

//...............................................................

var questionTwo = `${nomeUno} , ${nomeDue} , ${pGreco}`;

document.getElementById('concatena2').innerHTML = questionTwo;

//...............................................................

let zio = 'Mario';

document.getElementById('var').innerHTML = zio;

{
    let zia = 'Carla';
    document.getElementById('let').innerHTML = zia;
}

document.getElementById('final').innerHTML = zio;

//...............................................................

var zioDue = 'Mario';

document.getElementById('let2').innerHTML = zio;

{
    var ziaDue = 'Carla';
    document.getElementById('let3').innerHTML = ziaDue;
}

document.getElementById('final2').innerHTML = ziaDue;

//...............................................................
var numeroIniziale = 15;

var addizione = numeroIniziale + numeroIniziale;
var sottrazione = numeroIniziale - 10;

let incremento = addizione + 1;
let decremento = sottrazione - 1;

document.getElementById('iniziale').innerHTML = numeroIniziale;//stampa var

document.getElementById('valore1').innerHTML = `${addizione} , ${incremento} `  //addizione + incremento

document.getElementById('valore2').innerHTML = `${sottrazione} , ${decremento}` //sottrazione + decremento

document.getElementById('valore3').innerHTML = `Moltiplicazione: ${numeroIniziale * 3}`; //moltiplicazione

document.getElementById('valore4').innerHTML = `Divisione: ${numeroIniziale / 3}`; //divisione

document.getElementById('valore5').innerHTML = `Concatenazione: ${numeroIniziale} è un numero ` //concatenzaione 