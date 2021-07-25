//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби.


const fraction1 = {numerator: 1, denominator: 3};
const fraction2 = {numerator: 2, denominator: 4};


//Функция сложения 2-х объектов-дробей;

function addingTwoFractions(arr1,arr2) {
    let sumTwoFractions = {};
    if (arr1.denominator === arr2.denominator) {
        sumTwoFractions.numerator = arr1.numerator + arr2.numerator;
        sumTwoFractions.denominator = arr1.denominator;
    }
    else {
        sumTwoFractions.numerator = arr1.numerator * arr2.denominator + arr2.numerator * arr1.denominator;
        sumTwoFractions.denominator = arr1.denominator * arr2.denominator;
    } 
    return sumTwoFractions;
}
console.log(addingTwoFractions(fraction1,fraction2));


//Функция вычитания 2-х объектов-дробей;

function subtractingTwoFractions(arr1,arr2) {
    let differenceTwoFractions = {};
    if (arr1.denominator === arr2.denominator) {
        differenceTwoFractions.numerator = arr1.numerator - arr2.numerator;
        differenceTwoFractions.denominator = arr1.denominator;
    }
    else {
        differenceTwoFractions.numerator = arr1.numerator * arr2.denominator - arr2.numerator * arr1.denominator;
        differenceTwoFractions.denominator = arr1.denominator * arr2.denominator;
    } 
    return differenceTwoFractions;
}
console.log(subtractingTwoFractions(fraction1,fraction2));


//Функция умножения 2-х объектов-дробей;

function multiplicationOfTwoFractions(arr1,arr2) {
    let productOfTwoFractions = {};
    
    productOfTwoFractions.numerator = arr1.numerator * arr2.numerator;
    productOfTwoFractions.denominator = arr1.denominator * arr2.denominator;
     
    return productOfTwoFractions;
}
console.log(multiplicationOfTwoFractions(fraction1,fraction2));


//Функция деления 2-х объектов-дробей;

function divisionOfTwoFractions(arr1,arr2) {
    let quotientOfTwoFractions = {};
    
    quotientOfTwoFractions.numerator = arr1.numerator * arr2.denominator;
    quotientOfTwoFractions.denominator = arr1.denominator * arr2.numerator;
     
    return quotientOfTwoFractions;
}
console.log(divisionOfTwoFractions(fraction1,fraction2));


//Функция сокращения объекта-дроби;

function reducingFractions(arr) {
    let newFraction = {};
    let a = arr.numerator;
    let b = arr.denominator;

    while(a !== 0 && b !== 0) {
        a > b ? a %= b : b %= a;
    }

    let greaterCommonDivisor =  a + b;
    newFraction.numerator = arr.numerator / greaterCommonDivisor; 
    newFraction.denominator = arr.denominator / greaterCommonDivisor;

    return newFraction;
}

console.log(reducingFractions(fraction2))
    
