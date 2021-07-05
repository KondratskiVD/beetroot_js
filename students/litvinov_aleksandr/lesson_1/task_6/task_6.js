
const select = document.querySelector('select')
let amount = document.getElementById('sum');
let result = document.getElementById('text');

select.addEventListener('change', function () {

    if (select.value === "UAH") {
        let resultOne = amount.value * 27;
        result.innerHTML = `${resultOne} uah`;
    }
    else if (select.value === "EUR") {
        let resultTwo = amount.value * 0.85;
        result.innerHTML = `${resultTwo} eur`
    }
    else if (select.value === "AZN") {
        let resultThree = amount.value * 1.7;
        result.innerHTML = `${resultThree} azn`;
    }
}
)