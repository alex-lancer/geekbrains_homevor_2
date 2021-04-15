const Operation = require("./Operation");
const Operand = require("./Operand");
const { DivisionOperator, MinusOperator, MultiplyOperator, PlusOperator } = require("./Operator")

const operators = {
    [Operation.PLUS]: PlusOperator,
    [Operation.MINUS]: MinusOperator,
    [Operation.DIV]: DivisionOperator,
    [Operation.MUL]: MultiplyOperator,
}

class ElementFactory {
    constructor(char) {
        if (Operation.isOperator(char)) {
            return new operators[char](char)
        } else if (Operation.isBracket(char)) {
            return this;
        } else {
            return new Operand(char);
        }
    }
}

module.exports = ElementFactory;
