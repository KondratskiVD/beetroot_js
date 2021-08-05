export default function (){
    let btn5El = document.getElementById('task5');

    btn5El.addEventListener('click', function (){
        alert(checkPalindrom());
    })

    function checkPalindrom(){

        let userInput, number;
        do {
            userInput = prompt('Введите пятизначное число:');
            if(userInput){
                if(!(userInput.length === 5)){
                    continue;
                }
                number = parseInt(userInput);
            }
        } while (!number);

        number = number.toString();
        if(number[0] === number[0] && number[1] === number[3]) {
            return `Число ${number} - палиндром`;
        }
        return  `Число ${number} - не палиндром`;
    }
}
