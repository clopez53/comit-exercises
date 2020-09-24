"use strict";

alert("Enter two numbers to see if the first is greater than the second");
let firstNumber = prompt("Enter first number", 0);
let secondNumber = prompt("Enter the second number", 0);

if (firstNumber > secondNumber) {
    confirm("The first number is greater than the second number.");
} else if (firstNumber < secondNumber) {
    confirm("The first number is lesser than the second number.");
} else {
    confirm("The first number is equal to the second number.");
}