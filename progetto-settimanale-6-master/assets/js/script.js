var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var foto;
var emoji;

var sovrascrivi;

window.addEventListener('DOMContentLoaded', init);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	foto = document.getElementById('img');
	emoji = document.getElementById('emoji');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		if (sovrascrivi) {
			overwriteItem(sovrascrivi)
		} else {
			controlla();
		}
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					elencoHTML.innerHTML += `<td class="w-25"><button type="button" class="btn btn-outline-danger me-1" onClick="deleteItem(${element.id})"><i class="bi bi-trash"></i></button><button type="button" class="btn btn-outline-primary me-1" onClick="modifyItem(${element.id})"><i class="bi bi-pencil-square"></i></button></td>
                    <td class="fw-bold"><img src="${element.img}">${element.nome} ${element.cognome}</td>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
			img: img.value,
		};
		addData(data);

	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	if(data.img == ''){
		data.img = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
	}

	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
	img.value = '';
}

//------------------------------------------------------------ function elimina/modifica/aggiorna
async function deleteItem(i) {
	richiesta = window.confirm('Sei sicuro di voler cancellare?');
	if (richiesta) {
		return fetch('http://localhost:3000/elenco/' + i, {
			method: 'DELETE'
		});
	}
}

function modifyItem(i) {
	fetch(`http://localhost:3000/elenco/${i}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			nome.value = data.nome;
			cognome.value = data.cognome;
			img.value = data.img;
		});

	return sovrascrivi = i;
}

function overwriteItem(i) {
	if (nome.value && cognome.value && img.value) {
		fetch(`http://localhost:3000/elenco/${i}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				"nome": nome.value,
				"cognome": cognome.value,
				"img": img.value,
			}),
		});
		clearForm();
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

//verso l'infinito e oltre! 🚀




