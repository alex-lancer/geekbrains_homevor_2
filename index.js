const RPNParser = require( "./RPNParser");
const Calculator = require("./Calculator")

const source = process.argv[2]
const parsedFormula = RPNParser.parse(source);
const calculator = new Calculator(parsedFormula);
const result = calculator.getValue();

console.log(parsedFormula);
console.log(result);

