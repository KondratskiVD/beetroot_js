let n = +prompt('Введите число');

for (i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
        alert(i);
    }
}
alert(n);



