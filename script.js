const previousOperandDisplay = document.getElementById('previous-operand');
const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation')
const equalsBtn = document.querySelector('[data-equals')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear')

let previousOperand = ""
let currentOperand = ""
let operation = ""
let result


function add (a, b) {
    return a + b
}

function subtraction (a, b) {
    return a - b
}

function multiplication (a, b) {
    return a * b
}

function division (a, b) {
    return a / b
}