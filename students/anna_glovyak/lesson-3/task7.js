function showTime(hours = '0', minutes = '0', seconds = '0') {
    if(+hours < 10) {
        hours = '0' + hours;
    }
    if(+minutes < 10) {
        minutes = '0' + minutes;
    }
    if(+seconds < 10) {
        seconds = '0' + seconds;
    }
    return alert(hours + ':' + minutes + ':' + seconds);
}

// let userHours = prompt("Введите часы");
// let userMinutes = prompt("Введите минуты");
// let userSeconds= prompt("Введите секунды");

// alert(showTime(userHours, userMinutes, userSeconds));

export { showTime };
