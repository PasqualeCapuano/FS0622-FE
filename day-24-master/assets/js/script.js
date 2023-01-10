var elenco = [];
var prodotti = [];
var erroreElenco = document.getElementById('erroreElenco');
var erroreDueElenco = document.getElementById('erroreDueElenco');

var dati = document.getElementById('dati');
var cards = document.getElementById('cards');

var slider = document.getElementById('slider');

var img = 'https://robohash.org/bytefish';


window.addEventListener('DOMContentLoaded', init);

function init() {
    printData();
    printCards();
}

function printData() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        if(elenco.length > 0){
            elenco.map(function (element) {
                dati.innerHTML += `<tr class="bg-white "><td class="text-center fw-bold">${element.id}</td><td class="text-center fw-bold">${element.name}</td><td class="text-center fw-bold">${element.username}</td><td class="text-center fw-bold">${element.email}</td><td class="text-center fw-bold">${element.address['city']}</td></tr>`;
            });
        } else {
            erroreElenco.innerHTML = 'No elements to show';
        }
    });
}

function printCards() {
    fetch('https://fakestoreapi.com/products').then((response) => {
        return response.json();
    }).then((data) => {
        prodotti = data;
        if(prodotti.length > 0){
            prodotti.map(function (element) {
                cards.innerHTML += `<div class="card m-3" style="width: 18rem;"><img src="${img}"   class="card-img-top" alt="user picture"><div class="card-body"><h5 class="card-title text-primary">${element.title}</h5><p class="card-text"> ${element.category}</p><p class="card-text fw-bold">€ ${element.price}</div></div>`;
            });
        } else {
            erroreDueElenco.innerHTML = 'No elements to show';
        }
    });
}
