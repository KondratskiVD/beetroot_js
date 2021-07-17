function getTimeModify(seconds) {

    let hour = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);
    let sec = (seconds - (hour * 3600) - (minutes * 60));
    if (hour === 24) {
        hour = 0
    }
    if (hour > 24) {
        hour = hour - 24
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (sec < 10) {
        sec = '0' + sec
    }
    let result = `${hour}:${minutes}:${sec}`;
    return result
}

// console.log(getTime(9630));
export { getTimeModify }