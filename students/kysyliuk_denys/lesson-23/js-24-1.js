let a=prompt("Введите начало диапазона")
let b=prompt("Введите конец диапазона")
let sum=0
 
while(a<b){
    a++
    sum+=a  
}
if(a>b) {
    sum= "Чел ты..."
}

alert(sum)