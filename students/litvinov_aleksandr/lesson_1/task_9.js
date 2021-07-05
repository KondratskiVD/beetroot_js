
let result = 0;

let questionOne = +prompt(`How many meters in one mile? 
1610 
1300
1210`);

let questionTwo = +prompt(`How many grams in one karat? 
0.5
0.3
0.2`);

let questionThree = +prompt(`How many inches in one metr? 
42.5 
39.37
50.2`)

if (questionOne === 1610) {
    result = result + 2;
} else {
    result = result;
}

if (questionTwo === 0.2) {
    result = result + 2;
} else {
    result = result;
}

if (questionThree === 39.37) {
    result = result + 2;
} else {
    result = result;
}

console.log(`Your result is ${result}`);