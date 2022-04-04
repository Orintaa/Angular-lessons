"use strict";
class Point {
    constructor(_pointX, _pointY) {
        this._pointX = _pointX;
        this._pointY = _pointY;
        this.distanceFromOrigin = () => {
            return Math.sqrt(this._pointX * this._pointX + this._pointY * this._pointY); //arba this._pointX ** 2 galima uzrasyti
        };
        this.translate = (dx, dy) => {
            this._pointX += dx;
            this._pointY += dy;
        };
        this.distance = (p) => {
            return Math.sqrt((p._pointX - this._pointX) ** 2 +
                (p._pointY - this._pointY) ** 2);
        };
    }
    get pointX() {
        return this._pointX;
    }
    get pointY() {
        return this._pointY;
    }
    set pointX(x) {
        this._pointX = x;
    }
    set pointY(y) {
        this._pointY = y;
    }
    toString() {
        return '[' + this._pointX + ';' + this._pointY + ']';
    }
}
class Line {
    constructor(_p1, _p2) {
        this._p1 = _p1;
        this._p2 = _p2;
    }
    get p1() {
        return this._p1;
    }
    get p2() {
        return this._p2;
    }
    set p1(p) {
        this._p1 = p;
    }
    set p2(p) {
        this._p1 = p;
    }
    toString() {
        return this._p1.toString() + ', ' + this._p2.toString();
    }
    getDistance() {
        return this._p2.distance(this._p1);
    }
}
const p1 = new Point(2, 1);
const p2 = new Point(4, 5);
const linija = new Line(p1, p2);
console.log(linija.toString());
console.log(linija.getDistance());
