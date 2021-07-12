let d = +prompt('Введите число');
for (let i = 1; d >= i ; i++) {
    if (d % i === 0) {
        alert(`Делитель вашего числа: ${i}`);
    }
}