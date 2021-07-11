function getTimeInSeconds(hours, minutes, seconds) {
    let timeInSeconds = getSeconds(getSeconds(hours)) + getSeconds(minutes) + seconds;
    return timeInSeconds;
}

function getSeconds (time) {
    let newTime = time * 60;
    return newTime;
}

// let userHours = +prompt("Введите часы");
// let userMinutes = +prompt("Введите минуты");
// let userSeconds= +prompt("Введите секунды");

// alert(getTimeInSeconds(userHours, userMinutes, userSeconds));

export { getTimeInSeconds };

