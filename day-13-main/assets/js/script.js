var myDate = new Date();

const listaMesi = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
];

var ore = myDate.getHours();
var giorno = myDate.getDate();
var mese = myDate.getMonth() + 1;
var anno = myDate.getFullYear();

var saluto1;

if (ore < 12) {
  saluto1 = 'Buongiorno ';
} else if (ore < 19 ) {
  saluto1 = 'Buon Pomeriggio ';
}else{
 saluto1 = 'Buonasera '
}

var saluto2;

if (ore < 12) {
  saluto2 = 'Buongiorno <b> Massimo </b>';
} else if (ore < 19 ) {
  saluto2 = 'Buon Pomeriggio <b> Massimo </b>';
}else{
  saluto2 = 'Buonasera <b> Massimo </b>';
}

document.getElementById('saluto1').innerHTML =
  saluto1 + 'e benvenuto in Epicode!';

document.getElementById('oggi').innerHTML = `Oggi è il ${giorno}/${listaMesi[myDate.getMonth()]}/${anno}`;

document.getElementById('completo').innerHTML = myDate;

document.getElementById('giorno').innerHTML = 'Giorno: ' + giorno;

document.getElementById('mese').innerHTML = `Mese: ${listaMesi[myDate.getMonth()]}`;

document.getElementById('full').innerHTML = `Oggi è il ${giorno}/${mese}/${anno}`;

document.getElementById('saluto2').innerHTML = saluto2;
