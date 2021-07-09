let sum = prompt('Сумма:');
if(+sum >= 200 && +sum < 300) {
    alert(`Ваша сумма: ${+sum * 0.97}`);
    }
if(+sum >= 300 && +sum < 500) {
    alert(`Ваша сумма: ${+sum * 0.95}`);
    }    
if(+sum >= 500) {
    alert(`Ваша сумма: ${+sum * 0.93}`);
    }
