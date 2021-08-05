//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

let seconds = +prompt('Seconds')

function getTime() {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds = ((seconds % 3600) % 60);
    alert(hours + ':' + minutes + ':' + seconds)
}

getTime()