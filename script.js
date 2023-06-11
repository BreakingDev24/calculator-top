const previousOperandDisplay = document.getElementById('previous-operand');
const currentOperandDisplay = document.getElementById('current-operand')
const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation')
const equalsBtn = document.querySelector('[data-equals')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear')

let previousOperand = ""
let currentOperand = ""
let operation = ""
let result


function appendNumber (number) {
    currentOperand = currentOperand.toString() + number.toString()
    currentOperandDisplay.textContent = currentOperand
}

function chooseOperation (operator) {
    previousOperand = currentOperandDisplay.textContent
    operation = operator
    previousOperandDisplay.textContent = `${previousOperand} ${operation}`
    currentOperand = ""
    currentOperandDisplay.textContent = currentOperand
}

function displayResult () {
    result = compute(operation, previousOperand, currentOperand)
    previousOperandDisplay.textContent = `${previousOperand} ${operation} ${currentOperand} =`
    currentOperand = result
    currentOperandDisplay.textContent = result
}

function compute (operator, previousOperand, currentOperand) {
    switch (operator) {
        case "+":
            return add(previousOperand, currentOperand)
        case "-":
            return subtraction(previousOperand, currentOperand)           
        case "*":
            return multiplication(previousOperand, currentOperand)
        case "/":
            return division(previousOperand, currentOperand)
    }
}


numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
    })
})

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
    })
})

equalsBtn.addEventListener('click', displayResult)


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