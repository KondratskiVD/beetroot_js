//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.


export function showTime(h, m = '00', s = '00') {
    if (h < 10) {
        h = '0' + String(h);
    }
    if (m < 10) {
        m = '0' + String(m);
    }
    if (s < 10) {
        s = '0' + String(s);
    }

    let time = `${h}:${m}:${s}`;
    return time;
}

alert(showTime(10, 4, 5)); 