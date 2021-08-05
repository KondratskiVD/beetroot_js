let number = 5;

function factorial (num) {

    if (num==1){
        return 1 
    } else {
        return num * factorial(num - 1);
    } 
    
}
console.log(factorial(number));
// function factorial(n){
//     if (n==1) return 1;
//     else return n*factorial(n-1);		
//     }
//     var userNum=+prompt('Введите число для вычисления факториала');
//     alert(factorial(userNum));