function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

const expect = require('chai').expect;

describe('isOddOrEven', function () {

    it('should return undefined if input is not a string', function() {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
    });

    it('should return odd if input is string with odd length', function() {
        expect(isOddOrEven('a')).to.be.equal('odd');
    });

    it('should return even if input is string with even length', function() {
        expect(isOddOrEven('aa')).to.be.equal('even');
    });
});