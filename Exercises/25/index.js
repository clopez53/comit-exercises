"use strict";

let weekdayNumber = Number(prompt("Assign a numeric value between 1 and 7", 0));

if (weekdayNumber == 1) confirm("Today is Monday");
else if (weekdayNumber == 2) confirm("Today is Tuesday");
else if (weekdayNumber == 3) confirm("Today is Wednesday");
else if (weekdayNumber == 4) confirm("Today is Thursday");
else if (weekdayNumber == 5) confirm("Today is Friday");
else if (weekdayNumber == 6) confirm("Today is Saturday");
else if (weekdayNumber == 7) confirm("Today is Sunday");
else confirm("Error this is not a number between 1-7!");

let message;

switch (weekdayNumber) {
    case 1:
        message = "Today is Monday";
        break;

    case 2:
        message = "Today is Tuesday";
        break;

    case 3:
        message = "Today is Wednesday";
        break;

    case 4:
        message = "Today is Thursday";
        break;

    case 5:
        message = "Today is Friday";
        break;

    case 6:
        message = "Today is Saturday";
        break;

    case 7:
        message = "Today is Sunday";
        break;

    default:
        message = "Error! Input given has to be a number between 1-7."
        break;
}

console.log(message);