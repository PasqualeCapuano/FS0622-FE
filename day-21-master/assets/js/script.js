var tableArea = document.getElementById("tableArea");
var currentDate = new Date();
var btn = document.getElementById('inserisci');
var errorMessage = document.getElementById('error-message');
var utenti = [];

//------------------------------------------------------------------refresh page

window.addEventListener('DOMContentLoaded', init());

function init() {
    errorMessage.style.visibility = 'hidden';
}

//------------------------------------------------------------------oggetto
function User(_name, _surname, _birthday) {
    this.name = _name;
    this.surname = _surname;
    this.birthday = new Date(_birthday);

    this.calcolaEta = () => {
        let age = (currentDate.getFullYear() - this.birthday.getFullYear());

        if (currentDate.getMonth() < this.birthday.getMonth() ||
            (currentDate.getMonth() == this.birthday.getMonth() &&
                currentDate.getDate() < this.birthday.getDate())) {
            age--;
        }
        return age;
    }


    this.verificaCompleanno = () => {

        if (currentDate.getMonth() == this.birthday.getMonth() && currentDate.getDate() == this.birthday.getDate()) {
            return true;
        }
        return false;
    }

    this.getDataFormattata = () => {
        return `${this.birthday.getDate()} / ${(this.birthday.getMonth() + 1)} / ${this.birthday.getFullYear()}`;
    }

}

//------------------------------------------------------------------bottone inserisci

btn.addEventListener("click", function (e) {
    e.preventDefault();

    let userName = document.getElementById("name").value;
    let userSurname = document.getElementById("surname").value;
    let userBday = document.getElementById("birthday").value;

    let newUser = new User(userName, userSurname, userBday);

    if (userName == '' || userSurname == '' || userBday == '') {
        errorMessage.style.visibility = 'visible';
        return;
    }
    utenti.push(newUser);
    console.log(utenti);
    cancellaForm();
    printUser();
})

//------------------------------------------------------------------funzione per popolare array e tabella
function printUser() {
    tableArea.innerHTML = '';

    utenti.forEach((elemento) => {

        let colonna1 = `<td class="w-50">${elemento.name} ${elemento.surname}</td>`;

        if (elemento.verificaCompleanno()) {
            colonna1 = `<td class="w-50">${elemento.name} ${elemento.surname} 🎉</td>`;
        }

        let colonna2 = `<td class="w-25">${elemento.getDataFormattata()}</td>`;
        let colonna3 = `<td class="w-25">${elemento.calcolaEta()}</td>`;

        tableArea.innerHTML += `<tr>${colonna1} ${colonna2} ${colonna3}</tr>`;

    });
}

//------------------------------------------------------------------funzione per pulire il form
function cancellaForm() {
    document.getElementById("name").value = '';
    document.getElementById("surname").value = '';
    document.getElementById("birthday").value = '';
    errorMessage.style.visibility = 'hidden';
}

