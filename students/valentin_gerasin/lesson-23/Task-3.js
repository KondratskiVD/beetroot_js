const number = prompt('введите трехзначное число');
if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) {
    console.log('есть совпадение чисел');
} else {
    console.log('Совпадений нет');
}