
function calcDate(hour1, minutes1, seconds1, hour2, minutes2, seconds2) {
    let hourSec1 = hour1 * 3600;
    let minSec1 = minutes1 * 60;
    let result1 = hourSec1 + minSec1 + seconds1;

    let hourSec2 = hour2 * 3600;
    let minSec2 = minutes2 * 60;
    let result2 = hourSec2 + minSec2 + seconds2;

    let secondsResut = result1 - result2;

    let hour = Math.floor(secondsResut / 3600);
    if (hour < 10) {
        hour = '0' + String(hour)
    }
    let minutes = Math.floor(secondsResut % 3600 / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    }
    let sec = (secondsResut - (hour * 3600) - (minutes * 60));
    if (sec < 10) {
        sec = '0' + String(sec)
    }
    let result = `${hour}:${minutes}:${sec}`;

    return result;
}

console.log(calcDate());