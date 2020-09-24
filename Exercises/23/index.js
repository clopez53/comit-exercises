"use strict";

let hour = prompt("enter the current hour (out of 0-23)", 0)

if (hour < 0 || hour > 23) {
    confirm("input is incorrect");
} else if (hour < 8 || hour >= 18) {
    confirm("hour is outside of office hours");
} else if (hour >= 8 && hour < 18) {
    confirm("we are open");
}