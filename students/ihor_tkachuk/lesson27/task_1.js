//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость).


const myAudi = {
    manufacturer: 'Volkswagen Group',
    model: 'A4',
    'production year': 2016,
    'average speed': 50
};

//Функция для вывода на экран информации об автомобиле;

function showInformationAboutAuto() {
    for (const property in myAudi)  console.log(`${property}: ${myAudi[property]}`);
};

showInformationAboutAuto();

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function getTravelTime(distance) {
    let travelTime = distance / myAudi['average speed'];
    if (travelTime % 4 === 0) return (travelTime + Math.floor(travelTime / 4) - 1);
    else return (travelTime + Math.floor(travelTime / 4));
};

console.log(getTravelTime(603));
