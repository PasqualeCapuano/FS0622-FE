//-------------------------------------------------------------
function fruttolo(mele, arance) {
    const fruttone = `Succo con ${mele} mele e ${arance} arance`;

    return fruttone;
}

document.getElementById('corretta').innerHTML = fruttolo(4, 5);
document.getElementById('sbagliata').innerHTML = fruttolo(6);
//-------------------------------------------------------------



var tuaEta = 2022 - 2002
eta();
function eta() {
    document.getElementById('eta').innerHTML += `${tuaEta} anni`;
}

//-------------------------------------------------------------

zie();

function zie() {
    let anna = 2022 - 30;
    let maria = 2022 - 24;
    let tipa1 = '';
    let tipa2 = '';
    tipa1 = () => { return `L'anno di nascita di Anna è il ${anna}` }
    document.getElementById('persona1').innerHTML = tipa1();
    tipa2 = () => { return `L'anno di nascita di Anna è il ${maria}` }
    document.getElementById('persona2').innerHTML = tipa2();
}

//-------------------------------------------------------------

function fettine() {
    return function () {
        let fetteMela = 9;
        let fetteArancia = 15;

        document.getElementById('torta').innerHTML = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia`;
    }
}

let fattiAfette = fettine();

fattiAfette();

//-------------------------------------------------------------

var btn = document.getElementById('calcola');

btn.addEventListener('click', function() {
    let cibo = Number(document.getElementById('cibo').value);
    let detersivi = Number(document.getElementById('detersivi').value);
    let abiti = Number(document.getElementById('abiti').value);

    let somma = cibo + abiti + detersivi;

    document.getElementById('totale').innerHTML += somma;
});
