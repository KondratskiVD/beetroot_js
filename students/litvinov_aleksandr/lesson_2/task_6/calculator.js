cycle()

function cycle() {
    do {
        var firstNum = +prompt('Enter first number');
        var secondNum = +prompt('Enter second number');
        var action = prompt('Choose action - + / *');

        switch (action) {
            case '+':
                alert(firstNum + secondNum);
                break;
            case '-':
                alert(firstNum - secondNum);
                break;
            case '/':
                alert(firstNum / secondNum);
                break;
            case '*':
                alert(firstNum * secondNum);
            default:
                break;
        }

    } while (confirm('Do you want to solve more?'));
}