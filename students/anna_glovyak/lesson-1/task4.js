let year = prompt("Введите год рождения");

if ((year % 400 == 0) ||((year % 4 == 0) && ( year % 100 !== 0))) {
    alert("Этот год высокосный")
} else {
    alert("Этот год не высокосный")
}