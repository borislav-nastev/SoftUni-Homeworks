class Stringer {

    constructor(text, length) {
        this.innerString = text;
        this.innerLength = length;
    }

    decrease(n) {
        this.innerLength -= n;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }

        return this.innerLength;
    }

    increase(n) {
        return this.innerLength += n;
    }

    toString() {

        if (this.innerLength === 0) {
            return '...';
        }

        let innerStringLength = this.innerString.length;

        if (this.innerLength >= innerStringLength) {
            return this.innerString;
        }

        if (this.innerLength < innerStringLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        }
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
