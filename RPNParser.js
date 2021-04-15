const ElementFactory = require('./ElementFactory')

class RPNParser {
    static #stack = [];

    static #output = [];

    static parse(source) {
        const sourceArray = source.toString().replace(/ /g, '').split('');

        sourceArray.forEach(RPNParser.sortSourceChar);

        RPNParser.moveFromStackToOutput()

        return RPNParser.#output;
    }

    static sortSourceChar(char) {
        const element = new ElementFactory(char);

        if (element.isOperator()) {
            RPNParser.sendOperatorToStack(element)
        } else {
            RPNParser.sendOperandToStack(element)
        }
    }

    static sendOperatorToStack(operator) {
        let lastStackOperator;
        while (lastStackOperator = RPNParser.#stack[RPNParser.#stack.length - 1]) {
            if (lastStackOperator.isHighOperator() || operator.isLowOperator()) {
                RPNParser.#output.push(RPNParser.#stack.pop())
            } else {
                break;
            }
        }

        RPNParser.#stack.push(operator);
    }

    static moveFromStackToOutput() {
        let element;
        while(element = RPNParser.#stack.pop()) {
            RPNParser.#output.push(element);
        }
    }

    static sendOperandToStack(operand) {
        RPNParser.#output.push(operand);
    }
}


module.exports = RPNParser;
