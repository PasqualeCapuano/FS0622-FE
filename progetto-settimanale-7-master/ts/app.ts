document.addEventListener("DOMContentLoaded", function () {

  interface Smartphone {
    credito: number;
    numeroChiamate: number;
  }

  class User implements Smartphone {
    credito = 0;
    numeroChiamate = 0;
    numeroTelefono: number;
    nomeUtente: string;

    constructor(credito: number, numeroTelefono: number, nomeUtente: string) {
      this.credito = credito;
      this.numeroTelefono = numeroTelefono;
      this.nomeUtente = nomeUtente;
    }

    public ricarica(unaRicarica: number): void {
      this.credito = this.credito + unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
      this.numeroChiamate++;
      if ((+minutiDurata / 60 * 0.20) <= this.credito) {
        this.credito -= +minutiDurata / 60 * 0.20;
        this.credito = +this.credito.toFixed(2);
      } else {
        alert('fatti una ricarica')
        this.numeroChiamate--;
      }
    }

    public numero404(creditoRes: number): void {
      alert(`il tuo credito residuo è: ${creditoRes} €`)
    }

    public getNumeroChiamate(): void {
      alert(`Oggi hai effettuato: ${this.numeroChiamate} chiamate`)
    }

    public azzeraChiamate(): void {
      this.numeroChiamate = 0
    }
  }

  let FirstUser = new User(0, 3333333333, "Pasquale");

  console.log(FirstUser);

  let telefono = <HTMLInputElement>document.querySelector("#numero");
  let utenteLoggato = <HTMLElement>document.querySelector('#utente')
  let dispCredito = <HTMLElement>document.querySelector('#displayCredito')

  let dieciEuro = <HTMLElement>document.querySelector("#dieci");
  let ventiEuro = <HTMLElement>document.querySelector("#venti");
  let cinqueantaEuro = <HTMLElement>document.querySelector("#cinquanta");

  let login = <HTMLElement>document.querySelector("#login");
  let logout = <HTMLElement>document.querySelector("#logout");

  let chiamato = <HTMLInputElement>document.querySelector("#numeroChiam");
  let secondi = <HTMLInputElement>document.querySelector("#secondiChiam");
  let inoltra = <HTMLElement>document.querySelector("#inoltraChiam");
  let infoChiam = <HTMLElement>document.querySelector("#infoChiamate");
  let azzera = <HTMLElement>document.querySelector("#azzeraChiam")

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
          utenteLoggato.innerText = ` ${FirstUser.nomeUtente}`;
          dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`
        }
      } else {
        alert('It looks like yu\'re not our customer');
      }
    });
  }

  if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null ) {
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
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`
    } else {
      alert("Non sei un nostro cliente");
    }
  });

  ventiEuro.addEventListener("click", function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      FirstUser.ricarica(20);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`
    } else {
      alert("Non sei un nostro cliente");
    }
  });

  cinqueantaEuro.addEventListener("click", function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      FirstUser.ricarica(50);
      dispCredito.innerText = `Il tuo credito residuo è pari a: ${FirstUser.credito}€`
    } else {
      alert("Non sei un nostro cliente");
    }
  });


  inoltra.addEventListener('click', function () {
    if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value !== 404) {
      FirstUser.chiamata(Math.abs(+secondi.value))
      alert(`Il tuo credito residuo è pari a: ${FirstUser.credito}€`);
    }
  })

  infoChiam.addEventListener('click', function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      return FirstUser.getNumeroChiamate()
    }
  })

  azzera.addEventListener("click", function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      FirstUser.azzeraChiamate()
    }
  })
});
