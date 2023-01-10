abstract class Calcolo {
    redditoAnnuoLordo: number;
    tasseinps: number;
    tasseirpef: number;
    codiceredd: number;

    constructor(_redditoAnnuoLordo: number, _tasseinps: number, _tasseirpef: number, _codiceredd: number) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
        this.codiceredd = _codiceredd;
    }
    getUtileTasse(): number {
        return (this.redditoAnnuoLordo * this.codiceredd / 100);
    };
    getTasseInps(): number {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    };
}

//--------------------------------------------------------------

class Professionista extends Calcolo {
    constructor(_redditoAnnuoLordo: number = 30000, _tasseinps: number = 27.50, _tasseirpef: number = 5, _codiceredd: number = 70) {
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef, _codiceredd);
    };
}
class Artigiano extends Calcolo {

    constructor(_redditoAnnuoLordo: number = 30000, _tasseinps: number = 35, _tasseirpef: number = 15, _codiceredd: number = 67) {
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef, _codiceredd);
    };
}
class Commerciante extends Calcolo {

    constructor(_redditoAnnuoLordo: number = 30000, _tasseinps: number = 35, _tasseirpef: number = 15, _codiceredd: number = 40) {
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef, _codiceredd) ;
    };
}

//--------------------------------------------------------------

var newProfessionista: any = new Professionista();
console.log("utile tasse professionista: €", newProfessionista.getUtileTasse());
console.log("tasse inps professionista: €", newProfessionista.getTasseInps());
console.log("tasse irpef professionista: €", newProfessionista.getTasseIrpef());
console.log("reddito annuo netto professionista: €", newProfessionista.getRedditoAnnuoNetto());

console.log("....................................................................................");

var newArtigiano: any = new Artigiano();
console.log("utile tasse artigiano: €", newArtigiano.getUtileTasse());
console.log("tasse inps artigiano: €", newArtigiano.getTasseInps());
console.log("tasse irpef artigiano: €", newArtigiano.getTasseIrpef());
console.log("reddito annuo netto artigiano: €", newArtigiano.getRedditoAnnuoNetto());

console.log("....................................................................................");

var newCommerciante: any = new Commerciante();
console.log("utile tasse commerciante: €", newCommerciante.getUtileTasse());
console.log("tasse inps commerciante: €", newCommerciante.getTasseInps());
console.log("tasse irpef commerciante: €", newCommerciante.getTasseIrpef());
console.log("reddito annuo netto commerciante: €", newCommerciante.getRedditoAnnuoNetto());