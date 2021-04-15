const Element = require( './Element');
const Operation = require( "./Operation");

class Operator extends Element{

    #isHighPriority;

    constructor(char) {
        super(char);
        this._isOperator = true;
        this.#isHighPriority = Operation.isHighOperator(char);
    }

    doAction() {
        throw Error('It is an abstract method')
    }

    isHighOperator() {
        return this.#isHighPriority;
    }

    isLowOperator() {
        return !this.#isHighPriority;
    }
}

class PlusOperator extends Operator{

    doAction(a, b) {
        return a + b;
    }

}

class MinusOperator extends Operator{

    doAction(a, b) {
        return a - b;
    }

}

class MultiplyOperator extends Operator{

    doAction(a, b) {
        return a * b;
    }

}

class DivisionOperator extends Operator{

    doAction(a, b) {
        return a / b;
    }

}

module.exports = { DivisionOperator, MinusOperator, MultiplyOperator, PlusOperator }
