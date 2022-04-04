class Point {   
    constructor(
        private _pointX: number,
        private _pointY: number
        ) {
    }

    get pointX(){
        return this._pointX;
    }

    get pointY(){
        return this._pointY;
    }

    set pointX(x:number){
        this._pointX = x;
    }

    set pointY(y:number){
        this._pointY = y;
    }

    public toString():string {
        return '['+this._pointX+';'+this._pointY+']';
    }

    public distanceFromOrigin = () => {
        return Math.sqrt(this._pointX*this._pointX+this._pointY*this._pointY); //arba this._pointX ** 2 galima uzrasyti
    }

    public translate = (dx:number, dy:number) => {
            this._pointX += dx;
            this._pointY += dy;
    }

    public distance = (p:Point) => {
        return Math.sqrt((p._pointX - this._pointX)**2 +
        (p._pointY - this._pointY)**2)
    }

}

class Line {
    constructor(
        private _p1: Point,
        private _p2: Point
    ){}

    get p1(){
        return this._p1;
    }

    get p2(){
        return this._p2;
    }

    set p1(p:Point){
        this._p1 = p;
    }

    set p2(p:Point){
        this._p1 = p;
    }

    public toString():string {
        return this._p1.toString()+', '+this._p2.toString()
    }

    public getDistance() {
        return this._p2.distance(this._p1);
    }
}

const p1 = new Point(2, 1);
const p2 = new Point(4, 5);
const linija = new Line(p1, p2);

console.log(linija.toString());
console.log(linija.getDistance());
