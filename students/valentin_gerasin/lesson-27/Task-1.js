const auto = {
    brand: 'Aston Martin',
    model: 'DBS Superleggera ',
    year: 2021,
    averageSpeed: 161,
    maxSpeed: 340
}

function carInfo() {
    console.log(`Легковой автомобиль ${auto.brand} ${auto.model} \nГод выпуска ${auto.year}; Имеет среднюю скорость в ${auto.averageSpeed} км/ч, а максимальную в ${auto.maxSpeed} км/ч`);
}
carInfo()

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function timeCalc() {
    let distance = +prompt('Введите необходимую дистанцию');
    let time = distance / auto.averageSpeed
    console.log(`Время на для прохождения дистанции ${time}`);

    let x = time / 4
    restTime = Math.trunc(x)
    console.log(`Время на перерыв ${restTime}`);

    let allTime = time + restTime
    console.log(`Общее время ${allTime}`)

}
timeCalc()
