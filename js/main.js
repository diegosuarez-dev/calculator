let button1 = document.getElementById("number1").addEventListener("click", typeButton, false);
let button2 = document.getElementById("number2").addEventListener("click", typeButton, false);
let button3 = document.getElementById("number3").addEventListener("click", typeButton, false);
let button4 = document.getElementById("number4").addEventListener("click", typeButton, false);
let button5 = document.getElementById("number5").addEventListener("click", typeButton, false);
let button6 = document.getElementById("number6").addEventListener("click", typeButton, false);
let button7 = document.getElementById("number7").addEventListener("click", typeButton, false);
let button8 = document.getElementById("number8").addEventListener("click", typeButton, false);
let button9 = document.getElementById("number9").addEventListener("click", typeButton, false);
let button0 = document.getElementById("number0").addEventListener("click", typeButton, false);
let buttonPlus = document.getElementById("plus").addEventListener("click", typeButton, false);
let buttonMinus = document.getElementById("minus").addEventListener("click", typeButton, false);
let buttonProduct = document.getElementById("product").addEventListener("click", typeButton, false);
let buttonPoint = document.getElementById("point").addEventListener("click", typeButton, false);
let buttonReset = document.getElementById("reset").addEventListener("click", typeButton, false);
let buttonDivision = document.getElementById("division").addEventListener("click", typeButton, false);
let buttonEqual = document.getElementById("equal").addEventListener("click", typeButton, false);
let numbers = document.getElementById("numbers");

var operation = "";
var solved = false;
var firstNumber = 0.0;
var secondNumber = 0.0;

function typeButton() {
    let value = this.value;

    if (solved) {
        numbers.value = "";
        solved = false;
    }

    if (value == "+" | value == "-" | value == "*" | value == "/") {
        operation = value;
        if (numbers.value != "") {
            firstNumber = parseFloat(numbers.value);
            numbers.value = value;
        } else {
            firstNumber = 0;
        }
    } else {
        switch (value) {
            case ".":
                if (numbers.value != "") {
                    let previousContent = numbers.value;
                    let newContent = previousContent + value;
                    numbers.value = newContent;
                } else {
                    numbers.value = "0.";
                }
                break;
            case "c":
                numbers.value = "";
                break;
            case "=":
                console.log("is working");
                console.log(firstNumber);
                console.log(operation);
                console.log(secondNumber);
                if (operation != "") {
                    if (!isNaN(parseFloat(numbers.value))) {
                        secondNumber = parseFloat(numbers.value);
                    } else {
                        secondNumber = 0;
                    }
                    solveIt(firstNumber, operation, secondNumber);
                    operation = "";
                    firstNumber = 0;
                    secondNumber = 0;
                }
                break;
            default:
                let previousContent = numbers.value;
                if (isNaN(parseFloat(previousContent))) {
                    numbers.value = value;
                } else {
                    let newContent = previousContent + value;
                    numbers.value = newContent;
                }
        }
    }
}

function solveIt(firstNumber, operation, secondNumber) {
    let result = 0.0;
    switch (operation) {
        case "+":
            result = firstNumber+secondNumber;
            numbers.value = result;
            break;
        case "-":
            result = firstNumber-secondNumber;
            numbers.value = result;
            break;
        case "*":
            result = firstNumber*secondNumber;
            numbers.value = result;
            break;
        case "/":
            result = firstNumber/secondNumber;
            numbers.value = result;
    }
    solved = true;
}