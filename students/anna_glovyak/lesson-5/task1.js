const car = {
    brand: 'BMW',
    model: 'e525',
    year: 2002,
    speed: 110,
    getTimeDestansce: function(length) {
        let totalTime = length / this.speed;
        let hoursToRest = 0;

        function restTime (time) {
            if (Math.trunc(time / 4) >= 1) {
                hoursToRest += 1;
                return restTime(time - 4);
            }
            else return hoursToRest;    
        }     

        return Math.floor(totalTime + restTime (totalTime));
    },
    showInformation: function (car) {
        console.log(`Автомобиль: ${car.brand} ${car.model } \nГод выпуска: ${car.year} \nСредняя скорость: ${car.speed} км/час`);
    }
}
console.log(car.showInformation(car)) 
console.log(car.getTimeDestansce(1000));