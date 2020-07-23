const { sum, isSymmetric, rgbToHexColor, createCalculator } = require('./unitTestingLab');
const expect = require('chai').expect;

describe('tests for unitTestingLab module', function () {

    describe('function sum', function () {

        it('should return NaN with not numbers as items in input array', function () {
            const input = [1, 2, 'a'];
            const result = sum(input);
            expect(result).to.be.NaN;
        });

        it('should return NaN with string as input', function () {
            const input = 'asd';
            const result = sum(input);
            expect(result).to.be.NaN;
        });

        it('should return correct answer with correct items in input array', function () {
            const input = [1, 2, '1'];
            const result = sum(input);
            expect(result).to.be.equal(4);
        });

        it('should return correct answer with correct items in input array', function () {
            const input = [1, 1, 1];
            const result = sum(input);
            expect(result).to.be.equal(3);
        });
    });

    describe('function isSymmetric', function () {

        it('should return false with string as input', function () {
            const input = 'string';
            const result = isSymmetric(input);
            expect(result).to.be.false;
        });

        it('should return false with object as input', function () {
            const input = {};
            const result = isSymmetric(input);
            expect(result).to.be.false;
        });

        it('should return false with an asymmetric array as input', function () {
            const input = [1, 2, 3, 4];
            const result = isSymmetric(input);
            expect(result).to.be.false;
        });

        it('should return true with a symmetric array as input', function () {
            const input = [1, 2, 1];
            const result = isSymmetric(input);
            expect(result).to.be.true;
        });
    });

    describe('function rgbToHexColor', function () {

        it('should return correct value with correct arguments as input', function () {
            const input = [181, 78, 78];
            const result = rgbToHexColor(...input);
            expect(result).to.be.equal('#B54E4E');
        });

        describe('testing first argument', function () {

            it('should return undefined with not integer number as first argument', function () {
                const input = [1.1, 255, 255];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });

            it('should return undefined with negative number as first argument', function () {
                const input = [-1, 255, 255];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });

            it('should return undefined with bigger than 255 number as first argument', function () {
                const input = [256, 255, 255];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });
        });

        describe('testing second argument', function () {

            it('should return undefined with not integer number as second argument', function () {
                const input = [255, 1.1, 255];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });

            it('should return undefined with negative number as second argument', function () {
                const input = [255, -1, 255];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });

            it('should return undefined with bigger than 255 number as second argument', function () {
                const input = [255, 256, 255];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });
        });

        describe('testing third argument', function () {

            it('should return undefined with not integer number as third argument', function () {
                const input = [255, 255, 1.1];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });

            it('should return undefined with negative number as third argument', function () {
                const input = [255, 255, -1];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });

            it('should return undefined with bigger than 255 number as third argument', function () {
                const input = [255, 255, 256];
                const result = rgbToHexColor(...input);
                expect(result).to.be.undefined;
            });
        });
    });

    describe('function createCalculator', function () {

        let calc;

        beforeEach(function () {
            calc = createCalculator();
        });

        it('should have all properties', function () {
            expect(calc).to.have.property('add');
            expect(calc).to.have.property('subtract');
            expect(calc).to.have.property('get');
        });

        it('should return correct value with number as argument', function () {
            calc.add(5);
            const result = calc.get();
            expect(result).to.be.equal(5)
        });

        it('should return correct value with number as argument', function () {
            calc.subtract(5);
            const result = calc.get();
            expect(result).to.be.equal(-5);
        });

        it('should return correct value with number as argument', function () {
            calc.subtract(5);
            const result = calc.get();
            expect(result).to.be.equal(-5);
        });

        it('should return correct value with number as argument', function () {
            calc.add(5);
            calc.subtract('5');
            const result = calc.get();
            expect(result).to.be.equal(0);
        });

        it('should return NaN with non number as argument', function () {
            calc.add('5');
            calc.subtract(5);
            const result = calc.get();
            expect(result).to.be.equal(0);
        });

        it('should return NaN with non number as argument', function () {
            calc.add('as');
            const result = calc.get();
            expect(result).to.be.NaN;
        });

        it('should return NaN with non number as argument', function () {
            calc.add('as');
            const result = calc.get();
            expect(result).to.be.NaN;
        });

        it('should return NaN with non number as argument', function () {
            calc.subtract('as');
            const result = calc.get();
            expect(result).to.be.NaN;
        });
    });
});