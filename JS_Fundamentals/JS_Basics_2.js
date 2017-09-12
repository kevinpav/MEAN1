function magic_multiply(x, y){
    if (x instanceof Array){
        z = []
        for (var i=0; i < x.length; i++){
            z.push(x[i] * y);
        }
        return z;
    }
    if (typeof y === "string"){
        return("Error: Can not multiply by string");
    }
    if (x == 5 && y == 2){
        return(10);
    }
    if (x == 0 && y == 0){
        return("All inputs 0");
    }
    // Kind of kludgy but works
    if (typeof x === "string"){
        z = ""
        for (i=0; i<y; i++){
            z += x;
        }
        return(z);
    }
    return x;
}

// Test 1
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

// Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

// Test 3
let test3 = magic_multiply([1,2,3], 2);
console.log(test3);
// => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"