class Calculator {
    constructor(formula) {
        this.formula = formula;
        this.stack = [];

    }

    getValue() {
        this.formula.forEach(element => {
            if (!element.isOperator()) {
                return this.stack.push(element);
            }

            const a = this.stack.pop();
            const b = this.stack.pop();

            const result = element.doAction(a, b);
            this.stack.push(result);
        })
        return this.stack[0];
    }
}

module.exports = Calculator;
