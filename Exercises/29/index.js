"use strict";

let siblings = ["Aiza", "Jordan", "Clarissa"];
let parents = ["Grace", "Conrad"];

let family = siblings.concat(["Grace", "Conrad"]);

console.log(family);

family.push("Tarzan");

console.log(family);

family.reverse();

console.log(family);

console.log(family[1]);

family[1] = "David"

console.log(family[1]);

for (let i = 0; i < family.length; i++) {
    console.log(family[i])
}

for (let member of family) {
    console.log(member);
}