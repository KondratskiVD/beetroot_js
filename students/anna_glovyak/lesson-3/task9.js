import { showTime } from './task7.js';

function getTime (seconds){
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds = ((seconds % 3600) % 60);
    return showTime(hours, minutes, seconds)
}
// let userSeconds = prompt("Введите время в секундах");
// getTime(userSeconds);

export { getTime };