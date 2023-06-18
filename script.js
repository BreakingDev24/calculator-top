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
    if(number === "." && currentOperand.includes('.')) return
    if(currentOperand.length === 13) return
    currentOperand = currentOperand.toString() + number.toString()
    currentOperandDisplay.textContent = currentOperand
}

function chooseOperation (operator) {
    previousOperand = currentOperandDisplay.textContent
    operation = operator
    previousOperandDisplay.textContent = `${previousOperand} ${operation}`
    currentOperand = ""
    result = ""
    currentOperandDisplay.textContent = currentOperand
}

function displayResult () {
    if(previousOperand === "") return
    if(result) return
    result = compute(operation, previousOperand, currentOperand)
    previousOperandDisplay.textContent = `${previousOperand} ${operation} ${currentOperand} =`
    
    if(result.toString().includes('.') && result.toString().length > 10) {
        result = Math.trunc(result * (10 ** 10)) / (10 ** 10)
    }else if(result.toString().length > 13) {
        result = result.toExponential(2)
    } 
    

    currentOperand = result
    currentOperandDisplay.textContent = result
}

function clearAll () {
    previousOperand = "";
    currentOperand = ""
    result = ""
    operation = null

    previousOperandDisplay.textContent = ""
    currentOperandDisplay.textContent = ""
}

function deleteLast () {
    // if (result) return
    currentOperand = currentOperandDisplay.textContent.toString().slice(0, -1)
    currentOperandDisplay.textContent = currentOperand
}

function compute (operator, previousOperand, currentOperand) {
    let prev = parseFloat(previousOperand)
    let current = parseFloat(currentOperand)

    switch (operator) {
        case "+":
            return add(prev, current)
        case "-":
            return subtraction(prev, current)           
        case "x":
            return multiplication(prev, current)
        case "÷":
            if(current == 0){
                alert("You can't divide by 0")
                return
            }
            return division(prev, current)
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

allClearBtn.addEventListener('click', clearAll)

deleteBtn.addEventListener('click', deleteLast)



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