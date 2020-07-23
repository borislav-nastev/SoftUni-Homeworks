let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const expect = require('chai').expect;

describe('mathEnforcer', function () {

    it('should have all methods', function () {
        expect(mathEnforcer).to.have.property('addFive');
        expect(mathEnforcer).to.have.property('subtractTen');
        expect(mathEnforcer).to.have.property('sum');
    });

    describe('addFive method', function () {

        it('should return undefined with non number as input', function () {
            expect(mathEnforcer.addFive('a')).to.be.undefined;
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it('should return correct value with number as input', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-6)).to.be.equal(-1);
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.5);
        });
    });

    describe('subtractTen method', function () {

        it('should return undefined with non number as input', function () {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        it('should return correct value with number as input', function () {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(9)).to.be.equal(-1);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(11.1)).to.be.closeTo(1.1, 0.5);
        });
    });

    describe('sum method', function () {

        it('should return undefined with non number as first parameter', function () {
            expect(mathEnforcer.sum('a', 1)).to.be.undefined;
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
        });

        it('should return undefined with non number as second parameter', function () {
            expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
        });

        it('should return correct value with correct parameters as input', function () {
            expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
            expect(mathEnforcer.sum(1, -1)).to.be.equal(0);
            expect(mathEnforcer.sum(1, 1.1)).to.be.closeTo(2.1, 0.5);
            expect(mathEnforcer.sum(1.1, 1)).to.be.closeTo(2.1, 0.5);
        });
    });
});