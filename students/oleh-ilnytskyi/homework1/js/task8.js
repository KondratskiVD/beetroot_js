export default function (){
    let btn8El = document.getElementById('task8');

    btn8El.addEventListener('click', function (){
        alert(contentCircle());
    })

    function contentCircle(){
        let circleLength, squarePer;
        do {
            circleLength = prompt('Введите длину окружности:');
            circleLength = parseInt(circleLength);
            do{
                squarePer = parseInt(prompt('Ведите периметр квадрата:'));
            } while (!squarePer)

        } while (!circleLength);

        if(isContent(circleLength,squarePer )){
            return  `Круг длинной в ${circleLength} можно вписать в квадрат с периметром  ${squarePer}.`;
        }

        return  `Круг длинной в ${circleLength} НЕЛЬЗЯ вписать в квадрат с периметром  ${squarePer}.`;
    }

    function isContent(circleLength, squarePer){
        let circleRadius = circleLength/(Math.PI * 2);
        let squareSide = squarePer/4;
        return circleRadius < (squareSide / 2);

    }
}
