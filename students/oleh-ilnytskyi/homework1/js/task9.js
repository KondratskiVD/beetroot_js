export default function (){
    let btn9El = document.getElementById('task9');

    btn9El.addEventListener('click', function (){
        alert(quiz());
    })

    function quiz(){

        let ansv1, ansv2, ansv3, result = 0, quantity = 0;
        do {
            ansv1 = parseInt(prompt('Кто убил Кеннеди? Варианты: 1 - ФБР, 2 - Освальд, 3 - Масоны'));
            if (ansv1>3 || ansv1<0){
                ansv1 = null;
            }
        } while (!ansv1);

        do {
            ansv2 = parseInt(prompt('Когда началась Вторая мировая война? Варианты: 1 - 22 июня 1941, 2 - 1 сентября 1939, 3 - ШТО?!'));
            if (ansv2>3 || ansv2<0){
                ansv2 = null;
            }
        } while (!ansv2);

        do {
            ansv3 = parseInt(prompt('Тут надо просто угадать Варианты: 1 - 666, 2 - 300, 3 - 42'));
            if (ansv1>3 || ansv3<0){
                ansv3 = null;
            }
        } while (!ansv3);

        switch (true){
            case ansv1 === 2:
                result += 2;
                quantity++;
            case ansv2 === 2:
                result += 2;
                quantity++;
            case ansv3 === 3:
                result += 2;
                quantity++;
                break;
        }

        return  `Правильных ответов - ${quantity}. Всего баллов - ${result}.`;
    }

}
