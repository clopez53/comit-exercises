"use strict";

let favMovies = prompt("Enter your three favourite movies separated by commas:", "");

let movieArray = favMovies.split(", ");

for (let movie of movieArray) {
    console.log(movie);
}

let sentence = prompt("Please enter a sentence", "");

let reverseString = (text) => {
    let words = text.split(" ");
    let reversedWords = words.reverse();
    return reversedWords.join(" ");
}

console.log(reverseString(sentence));

