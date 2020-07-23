function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const expect = require('chai').expect;

describe('lookupChar', function() {

    it('should return undefined with non string as first parameter', function() {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
        expect(lookupChar(true, 1)).to.be.undefined;
    });

    it('should return undefined with non a number as second parameter', function() {
        expect(lookupChar('a', 'a')).to.be.undefined;
        expect(lookupChar('a', {})).to.be.undefined;
        expect(lookupChar('a', true)).to.be.undefined;
    });

    it('should return error message with incorrect index', function() {
       expect(lookupChar('aaa', -1)).to.be.equal('Incorrect index');
       expect(lookupChar('aaa', 3)).to.be.equal('Incorrect index');
       expect(lookupChar('aaa', 4)).to.be.equal('Incorrect index');
    });

    it('should return correct value with correct parameters', function() {
        expect(lookupChar('abc', 0)).to.be.equal('a');
        expect(lookupChar('abc', 2)).to.be.equal('c');
     });
});