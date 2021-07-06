let age = prompt('Введите возраст');
if (age >= 0 && age < 13) {
    console.log('Вы ребенок')
} else if (age >= 13 && age < 18) {
    console.log('Вы подросток')
} else if (age >= 18 && age < 60) {
    console.log('Вы взрослый')
} else if (age >= 60) {
    console.log('Вы пенсионер')
}
