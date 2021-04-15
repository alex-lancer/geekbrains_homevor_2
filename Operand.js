const Element = require( './Element');

class Operand extends Element{

    constructor(char) {
        super(char);
    }

    getValue() {
        return +this.value;
    }

    valueOf() {
        return this.getValue()
    }
}

module.exports = Operand;
