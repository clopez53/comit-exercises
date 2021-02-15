"use strict";

let userOne = {}

console.log(userOne);
console.log(typeof userOne);

userOne.username = "batman";
userOne.password = "hunter2";

console.log(userOne);

if (userOne.username == "batman" && userOne.password == "hunter2") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

let userTwo = {
    username: "wonderwoman",
    password: "123123",

    greet() {
        console.log("Hello, I am " + this.username);
    },

    updateUsername() {
        this.username = prompt("Type a new username", "");
    }
}

userTwo.greet();

userTwo.updateUsername();

userTwo.greet();