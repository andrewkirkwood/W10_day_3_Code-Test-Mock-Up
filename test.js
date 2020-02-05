var VendingMachine = function () {
    this.balance = 0;
    this.coins = []
};

const dime = 10
const nickel = 5
const quarter = 25
const dollar = 100

VendingMachine.prototype.getBalance = function () {
    return this.balance;
};

VendingMachine.prototype.getTotalCoinValue = function () {
    return this.coins;
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

    describe('Track value of multiple different-denomination coins inserted', function () {
        it('value of multiple coins of different values', function () {
            machine = new VendingMachine();
            machine.balance += ((dime * 2) + (nickel * 3))
            assert.strictEqual(35, machine.getBalance())
        });
    });

    describe('Return exact coins inserted on request', function(){
      it('machine returns value of all coins inserted', function () {
          machine = new VendingMachine();
          machine.coins.push(dime)
          machine.coins.push(nickel)
          assert.deepStrictEqual([10, 5], machine.getTotalCoinValue())
      });
    })



});
