let range = [];

function numbers(min, max) {
    for (i = min; i <= max; i++) {
        range.push(i)
    }
    let newArray = [];
    for (j = 0; j < range.length; j++) {
        let sum = 0;
        for (let k = 1; k < range[j]; k++) {
            if (range[j] % k === 0) {
                sum += k;
            }
        } if (sum === range[j]) {
            newArray.push(range[j]);
        }
    } return newArray;
}

console.log(numbers());

