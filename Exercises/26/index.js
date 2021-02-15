"use strict";

function showEvenNumbers() {
    for (let i = 2; i <= 100; i++) {
        if (i % 2 == 0) console.log(i);
    }
}

showEvenNumbers();

let name = prompt("What is your name?", "");
let age = prompt("What is your age?", 0);
let phone = prompt("What is your phone number?", 2041111111);
let street = prompt("What is your address?", "");
let postal = prompt("What is your postal code?", "R2V 4R4");
let maritalStatus = prompt("Are you married?", false);

function showUser() {
    console.log("Name: " + name + "\n"
              + "Age: " + age + "\n"
              + "Phone number: " + phone + "\n"
              + "Street: " + street + "\n"
              + "Postal code: " + postal + "\n"
              + "Are you married? " + maritalStatus);
}

showUser();

let evenNumbers = function() {
    for (let i = 2; i <= 100; i++) {
        if (i % 2 == 0) console.log(i);
    }
};

for (let i = 1; i <= 5; i++) {
    evenNumbers();
}

let fibonacci = function (x) {
    if (x===1) {
        return [0, 1];
    } else {
        let n = fibonacci(x - 1);
        n.push(n[n.length - 1] + n[n.length - 2]);
        return n
    }
};

console.log(fibonacci(10));

let showName = function () {
    console.log("===" + "=".repeat(name.length) + "===\n" +
                "=  " + name + "  =\n" +
                "===" + "=".repeat(name.length) + "==="); 
};

showName();
showName();