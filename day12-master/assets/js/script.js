//------------------------------
//----1
var imparare = 'Sto imparando JavaScript';
document.getElementById('maiuscola').innerHTML = imparare.toUpperCase();

//----2
document.getElementById('minuscola').innerHTML = imparare.toLowerCase();
//----3

var virgole = imparare.split('');
document.getElementById('strArray').innerHTML = virgole;

//----4

document.getElementById('estraiCaratteri').innerHTML = `${imparare.trim().charAt(2)}${imparare.trim().charAt(1)}${imparare.trim().charAt(14)}${imparare.trim().charAt(18)}`;

//----5
document.getElementById('concatena').innerHTML = imparare.concat(' JS');

//----6
document.getElementById('estraiStringa').innerHTML = imparare.slice(5,9);

//------------------------------
//----1
const nomi = ['Giovanni', 'Carla', 'Pietro', 'Mirtilla']; 
document.getElementById('array').innerHTML = nomi;

//----2
document.getElementById('lunghezza').innerHTML = nomi.length;

//----3
document.getElementById('elemento').innerHTML = nomi[2];

//----4
document.getElementById('ultimo').innerHTML = nomi[3];

//----5
nomi[2] ='Massimo'
document.getElementById('modificato').innerHTML = nomi;

//------------------------------

const anno = 2022;
const nascita = [2001, 1990, 1987, 2018, 2010]; //arrayList

calcoloEta = (annoNascita) => {
    let miaEta = anno - annoNascita;
    return miaEta;
}
document.getElementById('eta1').innerHTML += `${calcoloEta(nascita[0])} anni`;
document.getElementById('eta2').innerHTML += `${calcoloEta(nascita[1])} anni`;
document.getElementById('eta3').innerHTML += `${calcoloEta(nascita[2])} anni`;
document.getElementById('eta4').innerHTML += `${calcoloEta(nascita[3])} anni`;
document.getElementById('eta5').innerHTML += `${calcoloEta(nascita[4])} anni`;

const etaTot = [calcoloEta(nascita[0]), calcoloEta(nascita[1]), calcoloEta(nascita[2]), calcoloEta(nascita[3]), calcoloEta(nascita[4])];
document.getElementById('arrayEta').innerHTML += etaTot.toString();

//------------------------------
const animali = ['Coniglio','Cane','Gatto','Criceto'];


//----1
document.getElementById('intero').innerHTML = animali;
//----2
animali.push('Leone');

document.getElementById('aggiunto').innerHTML = animali;
//----3
animali.pop();
document.getElementById('estratto').innerHTML = animali;

//----4
document.getElementById('verifica1').innerHTML = animali.includes('Coniglio');

//----5
document.getElementById('verifica2').innerHTML = animali.includes('Vipera');
//------------------------------