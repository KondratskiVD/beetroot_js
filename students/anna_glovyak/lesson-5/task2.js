const fraction1 = {
    numerator: 9,
    denominator: 24,
}

const fraction2 = {
    numerator: 3,
    denominator: 6,
}

function sumFractions (obj1, obj2) {
    const result = {};
    
    result.denominator = (obj1.denominator * obj2.denominator) / NOD(obj1.denominator, obj2.denominator);
    result.numerator = obj1.numerator * (result.denominator / obj1.denominator)  + obj2.numerator * (result.denominator / obj2.denominator);
    return reduction(result);
}
    

function NOD (a, b) {//функция нахождения наибольшего общего делителя
    if (a >= b) {
        while (a % b !== 0) {
            let c = a % b;
            a = b;
            b = c;
        }
        return Math.abs(b);
    } else {
        while (b % a !== 0) {
            let c = b % a;
            b = a;
            a = c;
        }
        return Math.abs(a);
    }
}

function reduction(obj) {
    reductedObject = {};
    reductedObject.numerator = obj.numerator / NOD(obj.numerator, obj.denominator);
    reductedObject.denominator = obj.denominator / NOD(obj.numerator, obj.denominator);
    return reductedObject;  
}

function multiplyFractions (obj1, obj2) {
    const result = {};
    result.numerator = obj1.numerator * obj2.numerator;
    result.denominator = obj1.denominator * obj2.denominator;
    return reduction(result);
} 

function divideFractions (obj1, obj2) {
    const result = {};
    result.numerator = obj1.numerator * obj2.denominator;
    result.denominator = obj1.denominator * obj2.numerator;
    return reduction(result);
} 

console.log(sumFractions(fraction1, fraction2));
console.log(multiplyFractions(fraction1, fraction2));
console.log(divideFractions(fraction1, fraction2));
console.log(reduction(fraction1));