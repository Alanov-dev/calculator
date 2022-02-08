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
function operate(firstNumber, operator, secondNumber) {
    // let firstNumber = 5;
    // let secondNumber = 3;
    // let operator = "x";

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
        document.getElementsById("screen").textContent = result;
        return result;
    } else if (operator === "/") {
        let result = divide(firstNumber, secondNumber);
        document.getElementById("screen").textContent = result;
        return result;
    }
}
function receiveInput() {
    let firstArray = [];
    let firstNumber = 7;
    let secondNumber = 0;
    let operator = "x";

    const btn0 = document.querySelector("#b0");
    btn0.addEventListener("click", () => {
        firstArray.push(0);
    });    
    const btn1 = document.querySelector("#b1");
    btn1.addEventListener("click", () => {
        firstArray.push(1);
    });    
    const btn2 = document.querySelector("#b2");
    btn2.addEventListener("click", () => {
        firstArray.push(2);
    });    
    const btn3 = document.querySelector("#b3");
    btn3.addEventListener("click", () => {
        firstArray.push(3);
    });    
    const btn4 = document.querySelector("#b4");
    btn4.addEventListener("click", () => {
        firstArray.push(4);
    }); 
    const btn5 = document.querySelector("#b5");
    btn5.addEventListener("click", () => {
        firstArray.push(5);
    });
    const btn6 = document.querySelector("#b6");
    btn6.addEventListener("click", () => {
        firstArray.push(6);
    });
    const btn7 = document.querySelector("#b7");
    btn7.addEventListener("click", () => {
        firstArray.push(7);
        
        document.getElementById("display").textContent = firstArray.join("");
    });
    const btn8 = document.querySelector("#b8");
    btn8.addEventListener("click", () => {
        firstArray.push(8);
    });
    const btn9 = document.querySelector("#b9");
    btn9.addEventListener("click", () => {
        firstArray.push(9);
    });

}
console.log(operate());
receiveInput();