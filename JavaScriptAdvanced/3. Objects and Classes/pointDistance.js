class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return Math.sqrt( Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));

let p3 = new Point(5, 0);
let p4 = new Point(10, 0);
console.log(Point.distance(p3, p4));

let p5 = new Point(5, 5);
let p6 = new Point(9, 8);
console.log(Point.distance(p5, p6));

