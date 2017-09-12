"use strict";   // Plan to start using this as a safety check
// Also had issue with the "i" variable in the two functions. Had to add the "let" to keep them scoped correctly (local to function). Dumb design decision to default to module-level scoping. Very dumb.
// Part 1
function starString(num1){
    var starChar = "*";
    
    if (typeof num1 === "number"){
        if (num1 < 0) {
            return("")
        }  // If negative, return empty string
        var numTimes = num1;
    } else if (typeof num1 === "string"){
        starChar = num1[0].toLowerCase();
        numTimes = num1.length;
    } else {
        return("?");    // Don't know how to handle non-numeric, non-string
    }
    // Build the string
    var str1 = "";
    for (let i=0; i< numTimes; i++){
        str1 += starChar;
    }
    return(str1);
}

function drawStars(arr1){
    for (let i=0; i < arr1.length; i++){
        // console.log(i);
        console.log(starString(arr1[i]));
    }
}

// Test 1
// let test1 = starString(8);
// console.log(test1);

// Test 2
// let x = [4, 6, 1, 3, 5, 7, 25];
// Test 3
let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(x);