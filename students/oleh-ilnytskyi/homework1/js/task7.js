export default function (){
    let btn7El = document.getElementById('task7');

    btn7El.addEventListener('click', function (){
        alert(getSale());
    })

    function getSale(){

        let userInput, amount, sale, result, curency;
        do {
            userInput = prompt('Введите сумму покупки и увидите сумму по скидке:');
            amount = parseInt(userInput);

        } while (!amount);

        switch (true){
            case amount >= 200 && amount <= 300:
                sale = 0.03;
                break;
            case amount>300 && amount<=500:
                sale = 0.05;
                break;
            case amount>500:
                sale = 0.07;
                break;
            default:
                sale = 0;
                break;
        }
        return  `Ваша скидка равна ${Math.floor(sale*100)}%. А итоговая сумма к оплате - ${amount - (amount * sale)} у.е.`;
    }
}
