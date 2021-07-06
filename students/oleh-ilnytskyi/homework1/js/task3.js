let btn3El = document.getElementById('task3');

btn3El.addEventListener('click', function (){
    alert(checkNumber());
})

function checkNumber(){

    let userInput, number, result;
    do {
        userInput = prompt('Введите трехзначное число:');
        number = parseInt(userInput);
        if(number.toString().length > 3 || number.toString().length < 3){
            number = null;
        }
    } while (!number);

    number = number.toString();
    result = (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]);
    if (result){
        return 'Есть одинаковые цифры!';
    }
    return  'Все цифры разные!';
}