"use strict";
class Calcolo {
    constructor(_redditoAnnuoLordo, _tasseinps, _tasseirpef, _codiceredd) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
        this.codiceredd = _codiceredd;
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codiceredd / 100);
    }
    ;
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseinps / 100);
    }
    ;
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    }
    ;
}
class Professionista extends Calcolo {
    constructor(_redditoAnnuoLordo, _tasseinps, _tasseirpef) {
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef, 78);
    }
    ;
}
class Artigiano extends Calcolo {
    constructor(_redditoAnnuoLordo, _tasseinps, _tasseirpef) {
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef, 77);
    }
    ;
}
class Commerciante extends Calcolo {
    constructor(_redditoAnnuoLordo, _tasseinps, _tasseirpef) {
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef, 40);
    }
    ;
}
var newProfessionista = new Professionista(30000, 30, 14);
console.log("utile tasse professionista: €", newProfessionista.getUtileTasse());
console.log("tasse inps professionista: €", newProfessionista.getTasseInps());
console.log("tasse irpef professionista: €", newProfessionista.getTasseIrpef());
console.log("reddito annuo netto professionista: €", newProfessionista.getRedditoAnnuoNetto());
console.log("----------------------------------------------------------------------------------");
var newArtigiano = new Artigiano(20000, 60, 12);
console.log("utile tasse artigiano: €", newArtigiano.getUtileTasse());
console.log("tasse inps artigiano: €", newArtigiano.getTasseInps());
console.log("tasse irpef artigiano: €", newArtigiano.getTasseIrpef());
console.log("reddito annuo netto artigiano: €", newArtigiano.getRedditoAnnuoNetto());
console.log("----------------------------------------------------------------------------------");
var newCommerciante = new Commerciante(40000, 70, 13);
console.log("utile tasse commerciante: €", newCommerciante.getUtileTasse());
console.log("tasse inps commerciante: €", newCommerciante.getTasseInps());
console.log("tasse irpef commerciante: €", newCommerciante.getTasseIrpef());
console.log("reddito annuo netto commerciante: €", newCommerciante.getRedditoAnnuoNetto());
