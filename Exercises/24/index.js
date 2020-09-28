"use strict";

for (let i = 1; i < 1000; i++) {
    sum += i;
    if (sum > 400) break;
    console.log(sum);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

for (let i = 2; i < 100; i++) {
    if (i % 2 == 0) console.log(i);
}

for (let i = 1; i < 14; i++) {
    console.log("*".repeat(i));
}

// for (let lineNumber = 1; lineNumber <= 13; lineNumber) {
//     let stars = "";

//     for (let starCount = 1; starCount <= lineNumber; starCount++) {
//         stars = stars + "*";
//     }

//     console.log(stars);
// }

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 100;
while (j >= 0) {
    console.log(j);
    j--;
}

let x = 2
while (x < 100) {
    if (x % 2 == 0) console.log(x);
    x++;
}

let n = 1;
while (n < 14) {
    console.log("*".repeat(n));
    n++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

j = 100;
do {
    console.log(j);
    j--;
} while (j >= 0);

x = 2;
do {
    if (x % 2 == 0) console.log(x);
    x++;
} while (x < 100);

n = 1;
do {
    console.log("*".repeat(n));
    n++;
} while (n < 14);