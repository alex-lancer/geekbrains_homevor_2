class Element {

    _isOperator;

    value;

    constructor(char) {
        this.value = char;
    }


    isOperator() {
        return this._isOperator;
    }

    isOperand() {
        return !this._isOperator;
    }
}

module.exports = Element;
