function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate() {
    let firstNumber = 5;
    let secondNumber = 3;
    let operator = "x";

    if(operator === "x") {
       let result = multiply(firstNumber, secondNumber);
       document.getElementById("screen").textContent = result;
       return result;
    } else if (operator === "-") {
        let result = subtract(firstNumber, secondNumber);
        document.getElementById("screen").textContent = result;
        return result;
    } else if (operator === "+") {
        let result = add(firstNumber, secondNumber);
        document.getElementById("screen").textContent = result;
        return result;
    } else if (operator === "/") {
        let result = divide(firstNumber, secondNumber);
        document.getElementById("screen").textContent = result;
        return result;
    }
}
console.log(operate());