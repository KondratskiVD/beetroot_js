do {
    let a = +prompt('enter first number'),
    sign = prompt('enter sign'),
    b = +prompt('enter second number');

    switch (sign) {
    case '+': alert(a + b)
        break;
    case '-': alert(a - b)
        break;
    case '*': alert(a * b)
        break;
    case '/': alert(a / b)
        break;
    default: alert('ti durak?')
    }
} while (confirm('One more try?'));