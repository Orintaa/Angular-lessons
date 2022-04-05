"use strict";
class Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    get vardas() {
        return this._vardas;
    }
    get pavarde() {
        return this._pavarde;
    }
    get atlyginimas() {
        return this._atlyginimas;
    }
    gpm() {
        return this.atlyginimas * 0.2;
    }
    psd() {
        return this.atlyginimas * 0.0698;
    }
    vsd() {
        return this.atlyginimas * 0.1252;
    }
}
class PirmaeilisDarbuotojas extends Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        super(_vardas, _pavarde, _atlyginimas);
        this._npd = 0;
        this.perskaiciuotiNPD();
    }
    set atlyginimas(z) {
        this._atlyginimas = z;
        this.perskaiciuotiNPD();
    }
    perskaiciuotiNPD() {
        if (this._atlyginimas < 730) {
            return Math.round(this._npd = 460);
        }
        if (this._atlyginimas > 730 && this._atlyginimas < 1678) {
            return Math.round(this._npd = 460 - 0.26 * (this._atlyginimas - 730));
        }
        if (this._atlyginimas > 1678) {
            return Math.round(this._npd = 400 - 0.18 * (this._atlyginimas - 642));
        }
    }
    gpm() {
        return Math.round((this._atlyginimas - this._npd) * 0.2);
    }
}
class PraktikantasDarbuotojas extends Darbuotojas {
    constructor(_vardas, _pavarde) {
        super(_vardas, _pavarde, 0);
    }
}
let imone = [];
const jonas = new Darbuotojas('Jonas', 'J', 1000);
const petras = new PirmaeilisDarbuotojas('Petras', 'P', 1000);
const juozas = new PraktikantasDarbuotojas('Juozas', 'J');
imone.push(jonas);
imone.push(petras);
imone.push(juozas);
console.log(petras);
console.log(petras.gpm());
console.log(jonas);
console.log(jonas.gpm());
console.log(juozas);
console.log(juozas.gpm());
