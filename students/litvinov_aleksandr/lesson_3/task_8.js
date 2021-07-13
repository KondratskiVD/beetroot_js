let calcSeconds = (hour, minutes, seconds) => {
    let hourSec = hour * 3600;
    let minSec = minutes * 60;
    let result = hourSec + minSec + seconds;

    return result;
}

// console.log(calcSeconds(3, 12, 30));

export { calcSeconds }