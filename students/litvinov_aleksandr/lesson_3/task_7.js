
function getTime(hours, minutes = '00', seconds = '00') {
    if (hours < 10) {
        hours = '0' + String(hours)
    }
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    }
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }

    let time = `${hours}:${minutes}:${seconds}`
    return time
}

console.log(getTime(9, 6, 6));