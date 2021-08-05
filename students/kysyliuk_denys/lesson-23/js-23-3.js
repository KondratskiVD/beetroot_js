let number = prompt('Введите число с 100 до 999');
    number = number + '';

    if (number > 999) {
        alert('Чел ты...')
    }

    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
    {
        alert('Повезло повезло');
    }
    else
        alert('Ты бот');
    