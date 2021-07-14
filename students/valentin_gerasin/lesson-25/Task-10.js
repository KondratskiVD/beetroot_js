//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

let hOne = +prompt('Hours')
let mOne = +prompt('Minutes')
let sOne = +prompt('Seconds')

let hTwo = +prompt('Hours')
let mTwo = +prompt('Minutes')
let sTwo = +prompt('Seconds')

function timeInSeconds() {
    let secOne = (hOne * 3600 + mOne * 60 + sOne);
    let secTwo = (hTwo * 3600 + mTwo * 60 + sTwo);
    if (secOne > secTwo) {
        let difference = secOne - secTwo
        alert('Разница ' + difference)
        let hours = Math.floor(difference / 3600);
        let minutes = Math.floor((difference % 3600) / 60);
        difference = ((difference % 3600) % 60);
        console.log(hours + ':' + minutes + ':' + difference);
    } else if (secOne < secTwo) {
        let difference = secTwo - secOne
        alert('Разница ' + difference)
        let hours = Math.floor(difference / 3600);
        let minutes = Math.floor((difference % 3600) / 60);
        difference = ((difference % 3600) % 60);
        console.log(hours + ':' + minutes + ':' + difference);
    }
}
timeInSeconds();
















