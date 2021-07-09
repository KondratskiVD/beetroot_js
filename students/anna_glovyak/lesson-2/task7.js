let number = prompt("Введите число");
let tapNumber = Number(prompt("На сколько сдвинуть число?"))
let array = [];

for (let i = 0; i < number.length; i++) {
    array[i] = number[i];  
}
while (tapNumber){
    let free = 0;
    free = array[0];
    for (let j = 0; j < array.length - 1; j++) {
        array[j] = array[j + 1];    
    }
    array[array.length - 1] = free;
    tapNumber--;
}
alert(array);