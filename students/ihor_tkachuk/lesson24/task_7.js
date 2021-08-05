let userNum = prompt("Введите число");
let shift = prompt("Сдвиг:")
let newNum = [];
let elem ;

for (let i = 0; i < userNum.length; i++) {
    newNum[i] = userNum[i];  
}
while (+shift) {
    elem = newNum[0];
    for (let k = 0; k < newNum.length - 1; k++) {
        newNum[k] = newNum[k + 1];    
    }
    newNum[newNum.length - 1] = elem;
    shift--;
}
alert(newNum.join('')); 