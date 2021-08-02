let current = prompt('Введите валюту, которую хотите получить (EUR, UAN, AZN):');
let number = prompt('Введите сумму, которую хотите поменять:');
if (current == 'EUR') {
    number *= 0.85;
    alert(number);
}
else if (current == 'UAN') {
    number *= 27.20;
    alert(number);
}
else if (current == 'AZN') {
    number *= 1.7;
    alert(number);
}