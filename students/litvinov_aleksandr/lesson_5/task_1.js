import { getTime } from '../lesson_3/task_9.js'

const car = {
    factory: 'audi',
    model: 'q7',
    speed: 120,
}

let getInfoCar = (obj) => {
    let info = ''
    for (var key in obj) {
        info += key + ': ' + obj[key] + '; ';
    }
    console.log(info);
}
let getNeedTime = (distance, obj) => {
    let moveTime = Math.trunc((distance / obj.speed) * 100) / 100
    let restTime = Math.ceil(moveTime / 4)
    if (restTime >= 1) {
        restTime--
    }
    let totalTime = moveTime + restTime
    let totalTimeSec = totalTime * 3600
    let result = getTime(totalTimeSec)
    if (moveTime / 4 <= 1) {
        return result
    } return result

}
console.log(getNeedTime(540, car))
getInfoCar(car)
