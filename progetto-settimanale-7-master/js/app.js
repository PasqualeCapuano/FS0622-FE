"use strict";
document.addEventListener("DOMContentLoaded", function () {
    class User {
        constructor(credito, numeroTelefono, nomeUtente) {
            this.credito = 0;
            this.numeroChiamate = 0;
            this.credito = credito;
            this.numeroTelefono = numeroTelefono;
            this.nomeUtente = nomeUtente;
        }
        ricarica(unaRicarica) {
            this.credito = this.credito + unaRicarica;
        }
        chiamata(minutiDurata) {
            this.numeroChiamate++;
            if ((+minutiDurata / 60 * 0.20) <= this.credito) {
                this.credito -= +minutiDurata / 60 * 0.20;
                this.credito = +this.credito.toFixed(2);
            }
            else {
                alert('fatti una ricarica');
                this.numeroChiamate--;
            }
        }
        numero404(creditoRes) {
            alert(`il tuo credito residuo è: ${creditoRes} €`);
        }
        getNumeroChiamate() {
            alert(`Oggi hai effettuato: ${this.numeroChiamate} chiamate`);
        }
        azzeraChiamate() {
            this.numeroChiamate = 0;
        }
    }
    let FirstUser = new User(0, 3333333333, "Pasquale");
    console.log(FirstUser);
    let telefono = document.querySelector("#numero");
    let utenteLoggato = document.querySelector('#utente');
    let dispCredito = document.querySelector('#displayCredito');
    let dieciEuro = document.querySelector("#dieci");
    let ventiEuro = document.querySelector("#venti");
    let cinqueantaEuro = document.querySelector("#cinquanta");
    let login = document.querySelector("#login");
    let logout = document.querySelector("#logout");
    let chiamato = document.querySelector("#numeroChiam");
    let secondi = document.querySelector("#secondiChiam");
    let inoltra = document.querySelector("#inoltraChiam");
    let infoChiam = document.querySelector("#infoChiamate");
    let azzera = document.querySelector("#azzeraChiam");
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null) {
        login.addEventListener("click", function () {
            if (+telefono.value === FirstUser.numeroTelefono) {
                dieciEuro.style.display = 'inline-block';
                ventiEuro.style.display = 'inline-block';
                cinqueantaEuro.style.display = 'inline-block';
                login.style.display = 'none';
                telefono.disabled = true;
                logout.style.display = 'inline-block';
                chiamato.style.display = 'block';
                secondi.style.display = 'block';
                inoltra.style.display = 'block';
                infoChiam.style.display = 'inline-block';
                if (+telefono.value === FirstUser.numeroTelefono) {
                    utenteLoggato.innerText = `${FirstUser.nomeUtente}`;
                    dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`;
                }
            }
            else {
                alert('Non sei nostro cliente');
            }
        });
    }
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null) {
        logout.addEventListener("click", function () {
            if (dieciEuro.style.display === 'inline-block') {
                dieciEuro.style.display = 'none';
                ventiEuro.style.display = 'none';
                cinqueantaEuro.style.display = 'none';
                login.style.display = 'inline-block';
                telefono.disabled = false;
                logout.style.display = 'none';
                chiamato.style.display = 'none';
                secondi.style.display = 'none';
                inoltra.style.display = 'none';
                infoChiam.style.display = 'none';
                azzera.style.display = 'none';
                telefono.value = '';
                utenteLoggato.innerText = '';
                dispCredito.innerText = '';
            }
        });
    }
    dieciEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(10);
            dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`;
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    ventiEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(20);
            dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`;
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    cinqueantaEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(50);
            dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`;
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    inoltra.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value !== 404) {
            FirstUser.chiamata(Math.abs(+secondi.value));
            dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`;
        }
    });
    infoChiam.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            return FirstUser.getNumeroChiamate();
        }
    });
    azzera.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.azzeraChiamate();
        }
    });
});
