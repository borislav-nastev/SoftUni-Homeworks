(function () {

    Array.prototype.last = function () {
        const lastElement = this[this.length - 1];
        return lastElement;
    }

    Array.prototype.skip = function (n) {
        const newArray = this.slice(n);
        return newArray;
    }

    Array.prototype.take = function (n) {
        const newArray = this.slice(0, n);
        return newArray;
    }

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b, 0);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }

})();

let myArr = [1, 2, 3, 4, 5];
console.log(myArr.last());
console.log(myArr.skip(2));
console.log(myArr.take(3));
console.log(myArr.sum());
console.log(myArr.average());
console.log(myArr);