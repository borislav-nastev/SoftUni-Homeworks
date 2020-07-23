class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

const expect = require('chai').expect;

describe('StringBuilder', function () {

    it('should throw error with non string as parameter', function () {
        expect(() => new StringBuilder(1)).to.throw();
        expect(() => new StringBuilder({})).to.throw();
    });

    it('should return empty array without parameter', function () {
        const instance = new StringBuilder();
        expect(instance._stringArray).to.have.lengthOf(0);
    });

    it('should return array with string as parameter', function () {
        const instance = new StringBuilder('aaa');
        expect(instance._stringArray).to.have.lengthOf(3);
    });

    let instance;

    beforeEach(function () {
        instance = new StringBuilder('aaa');
    });

    it('should have all methods and properties', function () {
        expect(instance.hasOwnProperty('_stringArray')).to.be.true;
        expect(Object.getPrototypeOf(instance).hasOwnProperty('append')).to.be.true;
        expect(Object.getPrototypeOf(instance).hasOwnProperty('prepend')).to.be.true;
        expect(Object.getPrototypeOf(instance).hasOwnProperty('insertAt')).to.be.true;
        expect(Object.getPrototypeOf(instance).hasOwnProperty('remove')).to.be.true;
        expect(Object.getPrototypeOf(instance).hasOwnProperty('toString')).to.be.true;
    });

    describe('instance.append method', function () {

        it('should throw error with non string as parameter', function () {
            expect(() => instance.append(1)).to.throw();
            expect(() => instance.append({})).to.throw();
        });

        it('should add input to the end of array', function () {
            instance.append('bb');
            expect(instance._stringArray).to.include('b');
            expect(instance._stringArray).to.be.eql(['a', 'a', 'a', 'b', 'b']);
        });
    });

    describe('instance.prepend method', function () {

        it('should throw error with non string as parameter', function () {
            expect(() => instance.prepend(1)).to.throw();
            expect(() => instance.prepend({})).to.throw();
        });

        it('should add input to the start of array', function () {
            instance.prepend('bc');
            expect(instance._stringArray).to.include('b');
            expect(instance._stringArray).to.include('c');
            expect(instance._stringArray).to.be.eql(['b', 'c', 'a', 'a', 'a']);
        });
    });

    describe('instance.insertAt method', function () {

        it('should throw error with non string as parameter', function () {
            expect(() => instance.insertAt(1, 2)).to.throw();
            expect(() => instance.insertAt({}, 1)).to.throw();
        });

        it('should add array to the given index', function () {
            instance.insertAt('bb', 0);
            expect(instance._stringArray).to.be.eql(['b', 'b', 'a', 'a', 'a']);
        });
    });

    describe('instance.remove method', function () {

        it('should remove elements from given index to givenIndex + length', function () {
            instance.remove(1, 1);
            expect(instance._stringArray).to.be.eql(['a', 'a']);
        });
    });

    describe('instance.toString method', function () {

        it('should return correct result when toString method is invoke', function () {
            instance = new StringBuilder('hello');
            instance.append(', there');
            instance.prepend('User, ');
            instance.insertAt('woop', 5);
            instance.remove(6, 3);
            const result = instance.toString();
            expect(result).to.be.equal('User,w hello, there');
        });
    });
});