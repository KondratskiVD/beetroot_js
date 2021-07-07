let btn1El = document.getElementById('task1');

btn1El.addEventListener('click', function (){
    alert(getAge());
})

function getAge(){

    let result, userInput, age;
    do {
        userInput = prompt('Введите возраст:');
        age = parseInt(userInput);
    } while (!age);

    if(age){
        switch (true){
            case 0 <= age && age < 12:
                console.log(typeof age)
                result = 'ребенком';
                break;
            case 12 <= age && age < 18:
                result = 'подростком';
                break;
            case 18 <= age && age < 60:
                result = 'взрослым';
                break;
            case 60 <= age && age < 120:
                result = 'пенсионером';
                break;
        }
    }

    if(age > 120){
        return 'Кто ты, чудовище?!';
    }

    return ` Ты являешься ${result}.`;
}