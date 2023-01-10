var products: Articoli[];

class Articoli {
  id: number; codprod: number; collezione: string; capo: string; modello: number; quantita: number; colore: string;
  prezzoivaesclusa: number; prezzoivainclusa: number; disponibile: string; saldo: number;

  constructor(
    _id: number, _codprod: number, _collezione: string, _capo: string, _modello: number,_quantita: number, _colore: string,_prezzoivaesclusa: number,_prezzoivainclusa: number, _disponibile: string,_saldo: number
  ) {
    this.id = _id;this.codprod = _codprod;this.collezione = _collezione;this.capo = _capo;this.modello = _modello;this.quantita = _quantita;this.colore = _colore;this.prezzoivaesclusa = _prezzoivaesclusa;this.prezzoivainclusa = _prezzoivainclusa;this.disponibile = _disponibile;this.saldo = _saldo;
  }

  getSaldoCapo(): number {
    return (this.prezzoivainclusa * this.saldo) / 100;
  }

  getAcquistoCapo(): number {
    return this.prezzoivainclusa - this.getSaldoCapo();
  }
}

function getDati(): void {
  fetch("http://localhost:3000/capi")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      products = data;
      products.map(function (e) {
        let capo = new Articoli(
          e.id,e.codprod,e.collezione,e.capo,e.modello,e.quantita,e.colore,e.prezzoivaesclusa,e.prezzoivainclusa,e.disponibile,e.saldo
        );
        console.log(capo);
        console.log(`totale capo: € ${capo.getAcquistoCapo()}`);
      });
      console.log(products);
    });
}

getDati();