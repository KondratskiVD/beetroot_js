
import { calcSeconds } from '../../lesson_3/task_8.js'
import { getTimeModify } from './get-time-modify.js'

let timeS = document.getElementById('sec');
let newTimeS = document.getElementById('resultSec');
let newTimeM = document.getElementById('resultMin');
let newTimeH = document.getElementById('resultHour');

let time = {
    hour: 21,
    minutes: 59,
    seconds: 35,
    showTime: function () {
        timeS.innerHTML = (`${this.hour}:${this.minutes}:${this.seconds}`)
    },
    changeTimeSec: function () {
        let secResult = calcSeconds(time.hour, time.minutes, time.seconds)
        let newSecResult = secResult + (+newSec.value)
        let newTime = getTimeModify(newSecResult)
        return newTimeS.innerHTML = newTime
    },

    changeTimeMin: function () {
        let secResult = calcSeconds(time.hour, time.minutes, time.seconds)
        let newSecResult = secResult + (+newMin.value * 60)
        let newTime = getTimeModify(newSecResult)
        return newTimeM.innerHTML = newTime

    },
    changeTimeHour: function () {
        let secResult = calcSeconds(time.hour, time.minutes, time.seconds)
        let newSecResult = secResult + (+newHour.value * 3600)
        let newTime = getTimeModify(newSecResult)
        return newTimeH.innerHTML = newTime
    }
}

time.showTime()

let buttonS = document.getElementById('addSec');
buttonS.addEventListener('click', time.changeTimeSec)
let buttonM = document.getElementById('addMin');
buttonM.addEventListener('click', time.changeTimeMin)
let buttonH = document.getElementById('addHour');
buttonH.addEventListener('click', time.changeTimeHour)
let newSec = document.getElementById('newSec');
let newMin = document.getElementById('newMin');
let newHour = document.getElementById('newHour');





