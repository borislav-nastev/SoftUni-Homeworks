function solve() {

    class Figure {

        constructor(units) {
            this.units = units || 'cm';
        }

        changeUnits(value) {
            return this.units = value;
        }

        changeMetrics(val) {

            const newValue = this.units === 'm'
                ? val /= 100
                : this.units === 'mm'
                    ? val *= 10
                    : val;

            return newValue;
        }
    }

    class Circle extends Figure {

        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get radius() {
            return this.changeMetrics(this._radius);
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {

        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.changeMetrics(this._width);
        }

        get height() {
            return this.changeMetrics(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}