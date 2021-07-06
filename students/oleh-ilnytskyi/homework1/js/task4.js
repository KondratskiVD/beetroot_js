let btn4El = document.getElementById('task4');

btn4El.addEventListener('click', function (){
    alert(checkYear());
})

function checkYear(){

    let userInput, year;
    do {
        userInput = prompt('Введите год в формате xxxx:');
        if(!(userInput.length === 4)){
            continue;
        }
        year = parseInt(userInput);
    } while (!year);

    if(year % 400 ===0 || (year % 4 ===0 && year % 100 !== 0)) {
        return 'Высокосный';
    }
    return  'Не высокосный';
}