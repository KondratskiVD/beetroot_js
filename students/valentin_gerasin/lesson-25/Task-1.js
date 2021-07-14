//Написать функцию, которая принимает 2 числа и возвращает - 1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

const compareNumbers = (a, b) => {
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    if (a == b) {
        return 0
    }
}
console.log(compareNumbers(2, 3));
