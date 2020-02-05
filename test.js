var VendingMachine = function () {
    this.balance = 0;
};

const dime = 10
const nickel = 5
const quarter = 25
const dollar = 100

VendingMachine.prototype.getBalance = function () {
    return this.balance;
};

VendingMachine.prototype.getCoinValue = function () {
    return this.coinValue;
};
let assert = require('assert');

describe('Vending Machine', function () {

    describe('Balance of money inserted', function () {
        it('Is zero when initially powered up', function () {
            machine = new VendingMachine();
            assert.strictEqual(0, machine.getBalance())
        });
    });

    describe('Tracks value of single coin inserted', function () {
      it('value of coin', function() {
        machine = new VendingMachine()
        machine.balance += dime
        assert.strictEqual(10, machine.getBalance())
        machine.balance += nickel
        assert.strictEqual(15, machine.getBalance())
        machine.balance += quarter
        assert.strictEqual(40, machine.getBalance())
        machine.balance += dollar
        assert.strictEqual(140, machine.getBalance())
      })
    })

    describe('Track value of multiple same-denomination coins inserted', function () {
        it('value of multiple coins of same value', function () {
            machine = new VendingMachine();
            machine.balance += (dime * 2)
            assert.strictEqual(20, machine.getBalance())
        });
    });

});
