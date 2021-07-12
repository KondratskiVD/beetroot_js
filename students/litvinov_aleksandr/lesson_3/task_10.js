import { calcSeconds } from './task_8.js'
import { getTime } from './task_9.js'

let calcDate = (hour1, minutes1, seconds1, hour2, minutes2, seconds2) => {
    let calcSecondsOne = calcSeconds(hour1, minutes1, seconds1)
    let calcSecondsTwo = calcSeconds(hour2, minutes2, seconds2)
    let result = calcSecondsOne - calcSecondsTwo
    let newResult = getTime(result)
    return newResult
}
console.log(calcDate(15, 30, 20, 14, 20, 10));
