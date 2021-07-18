const check = [
    {
        product: 'bread',
        count: 1,
        price: 2
    },

    {
        product: 'water',
        count: 3,
        price: 4

    },

    {
        product: 'sugar',
        count: 2,
        price: 10

    },

    {
        product: 'milk',
        count: 1,
        price: 8

    },

    {
        product: 'potato',
        count: 10,
        price: 1
    },
]


function printCheck(list) {
    for (let item of list) {
        console.log(item.product + ' quantity' + ': ' + item.count + ', ' + ' price: ' + '$' + item.price * item.count);
    }
}

function getTotalSum(list) {
    let totalSum = 0;
    for (let item of list) {
        totalSum = totalSum + item.price * item.count
    }
    return totalSum;
}

function getTheMostExpensiveProduct(list) {
    let theMostExpensiveProduct = list.sort((a, b) => a.price - b.price)[list.length - 1].product;
    console.log(`The most expensive product in check: ${theMostExpensiveProduct}`);
    return theMostExpensiveProduct;
}

function getAverageCheckPrice(list) {
    let averagePrice = 0;
    let checkQuantity = 0;
    for (let item of list) {
        checkQuantity += item.count;
    }
    averagePrice = getTotalSum(list) / checkQuantity;
    return console.log(`Average price for product in check: $${Math.round(averagePrice)}`)
}

printCheck(check);
console.log(`Total sum: $${getTotalSum(check)}`)

getTheMostExpensiveProduct(check);

getAverageCheckPrice(check);