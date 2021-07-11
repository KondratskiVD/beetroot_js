let num1 = 8;
let num2 = 6;
let result = 0;
    
function isFirstBigger (a,b) {
    switch (true) {
        case a > b:
            result = 1;
            break;
        case a < b:
            result = -1;
            break;
        case a > b:
            result = 1;
            break;
    }
    return console.log(result);
}
isFirstBigger(num1, num2);
