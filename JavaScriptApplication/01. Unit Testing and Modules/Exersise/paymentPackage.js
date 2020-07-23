class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

const expect = require('chai').expect;

describe('PaymentPackage', function () {

    it('should throw error with only one parameter', function () {
        expect(() => new PaymentPackage('Bobi')).to.throw();
        expect(() => new PaymentPackage(100)).to.throw();
    });

    it('should throw error with non string as name', function () {
        expect(() => new PaymentPackage(1, 100)).to.throw();
        expect(() => new PaymentPackage({}, 100)).to.throw();
        expect(() => new PaymentPackage(true, 100)).to.throw();
    });

    it('should throw error with non number as value', function () {
        expect(() => new PaymentPackage('Bobi', '100')).to.throw();
        expect(() => new PaymentPackage('Bobi', {})).to.throw();
        expect(() => new PaymentPackage('Bobi', true)).to.throw();
    });

    it('should throw error with empty string as name', function () {
        expect(() => new PaymentPackage('', 100)).to.throw();
    });

    it('should throw error with negative number as value', function () {
        expect(() => new PaymentPackage('Bobi', -100)).to.throw();
    });

    let instance;

    beforeEach(() => {
        instance = new PaymentPackage('Bobi', 100);
    });

    it('should has default value as VAt', function () {
        expect(instance.VAT).to.be.equal(20);
    });

    it('should has default value as active', function () {
        expect(instance.active).to.be.true;
    });

    describe('test Accessors', function () {

        describe('name', function () {

            it('should throw error with non string as new name value', function () {
                expect(() => instance.name = 1).to.throw();
            });

            it('should change name with string as new name', function () {
                instance.name = 'Pesho';
                expect(instance.name).to.be.equal('Pesho');
            });
        });

        describe('value', function () {
            it('should throw error with non number as new value', function () {
                expect(() => instance.value = {}).to.throw();
            });

            it('should throw error with negative number as new value', function () {
                expect(() => instance.value = -10).to.throw();
            });

            it('should change value with correct input as new value', function () {
                instance.value = 150;
                expect(instance.value).to.be.equal(150);
            });
        });

        describe('VAT', function () {

            it('should throw error with non number as value', function () {
                expect(() => instance.VAT = {}).to.throw();
            });

            it('should throw error with negative number as value', function () {
                expect(() => instance.VAT = -100).to.throw();
            });

            it('should change VAT with correct input as new value', function () {
                instance.VAT = 10;
                expect(instance.VAT).to.be.equal(10);
            });
        });

        describe('active', function () {

            it('should throw error with non boolean as value', function () {
                expect(() => instance.active = 'true').to.throw();
                expect(() => instance.active = {}).to.throw();
            });

            it('should change value with boolean as new value', function () {
                instance.active = false;
                expect(instance.active).to.be.false;
            });
        });
    });

    describe('instance.toString method', function () {

        it('should return correct output with correct values', function () {
            instance = new PaymentPackage('HR Services', 1500);
            let result = instance.toString();
            expect(result).to.be.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it('should return correct output with correct values', function () {
            instance = new PaymentPackage('HR Services', 1500);
            instance.active = false;
            let result = instance.toString();
            expect(result).to.contain("(inactive)");
        });
    });
});