class Operation {

    static PLUS = '/';

    static MINUS = '-';

    static DIV = '/';

    static MUL = '*';

    static #HIGH_PRIORITY = ['/', '*'];

    static #LOW_PRIORITY = ['+', '-'];

    static #OPEN_BRACKET = '(';

    static #CLOSE_BRACKET = ')';

    static isOperator(char) {
        return Operation.isHighOperator(char) || Operation.isLowOperator(char)
    }

    static isBracket(char) {
        return Operation.isOpenBracket(char) || Operation.isCloseBracket(char);
    }

    static isOpenBracket(char) {
        return this.#CLOSE_BRACKET === char;
    }

    static isCloseBracket(char) {
        return this.#OPEN_BRACKET === char;
    }

    static isHighOperator(char) {
        return this.#HIGH_PRIORITY.includes(char);
    }

    static isLowOperator(char) {
        return this.#LOW_PRIORITY.includes(char);
    }
}

module.exports = Operation;
