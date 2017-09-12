function zero_negativity(arr1){
    for (var i=0; i < arr1.length; i++){
        if (arr1[i] < 0) {
            return false;
        }
    }
    return true;
}

function is_even(num1){
    if (num1 % 2 == 0){
        return true;
    }
    return false;
}

function how_many_even(arr1){
    totalEven = 0;
    for (var i=0; i < arr1.length; i++){
        if (is_even(arr1[i])){
            totalEven++;
        }
    }
    return (totalEven);
}

function create_dummy_array(num1){
    arr1 = []
    for (i=0; i < num1; i++){
        arr1.push(Math.floor(Math.random() * 10));
    }
    return arr1;
}

function random_choice(arr1){
    return(arr1[Math.floor(Math.random() * arr1.length)]);
}
// Math 1
let test1 = zero_negativity([1,2,3,4,5,6,7,8,9]);
console.log(test1);

// Math 2
let test2 = is_even(3);
console.log(test2);

// Math 3
let test3 = how_many_even([1,2,3,4,5,6,7,8,9]);
console.log(test3);

// Math 4
let test4 = create_dummy_array(9);
console.log(test4);

// Math 5
let test5 = random_choice([1,2,3,4,5,6,7,8,9]);
console.log(test5);
