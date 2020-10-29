"use strict";

let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(number => number*number);

console.log(numbers);
console.log(squaredNumbers);

let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = moreNumbers.filter(number => number % 2 == 0);
let oddNumbers = moreNumbers.filter(number => number % 2 != 0);

console.log(moreNumbers);
console.log(evenNumbers);
console.log(oddNumbers);

let people = [{name:"Tom", age:34, city:"Winnipeg"},
              {name:"Dick", age:5, city:"Toronto"},
              {name:"Harry", age:12, city:"Saskatoon"},
              {name:"Justin", age:34, city:"London"},
              {name:"Timberlake", age:34, city:"Columbia"}];

let oldPeople = people.filter(person => person.age > 30);
let youngSasks = people.filter(person => person.age < 20 && person.city == "Saskatoon");
let ages = people.map(person => person.age);

console.log(oldPeople);
console.log(youngSasks);
console.log(ages);


// Bonus
// let strings = ["bongo drums", "guitar", "flute", "double bass", "xylophone","piano"];      

let strings = [prompt("Please enter a string")];

let stripVowels =  strings.map((item) => {
  return item.replace( /[aeiou]/g, '' ); 
});

console.log(stripVowels);