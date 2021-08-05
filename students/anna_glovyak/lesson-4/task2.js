const tab = [
    {
        product: 'bear',
        count: 3,
        price: 5
    },
    {
        product: 'icecream',
        count: 1,
        price: 10

    },
    {
        product: 'butter',
        count: 2,
        price: 12

    },
    {
        product: 'bread',
        count: 1,
        price: 2

    },
    {
        product: 'tomato',
        count: 6,
        price: 4
        },   
]


function printTab(collection) {
    for (let item  of collection) {
    console.log(item.product + ' ' + item.count + ' qty' + ': ' + item.price * item.count + '$');
    }
}
function getTotalSum (collection) {
    let totalSum = 0;
    for (let item  of collection) {
        totalSum = totalSum + item.price * item.count
    }
    return totalSum;
}
function getTheMostExpensive(collection) {
    let theMostExpensiveProduct = collection.sort((a, b) => a.price - b.price)[collection.length - 1].product;
    console.log(`The most expensive product in your tab: ${theMostExpensiveProduct}`);
    return theMostExpensiveProduct;
}
function getAverageCheckPrice(collection) {
    let averagePrice = 0;
    let checkQuantity = 0;
    for(let item of collection) {
        checkQuantity += item.count;
    }
    averagePrice = getTotalSum(collection) / checkQuantity;
    return console.log(`Average price for product in your tab: ${Math.round(averagePrice)}$`)
}

printTab(tab);
console.log(`----------------
Total SUM: ${getTotalSum(tab)} $`) //это просто для понятного отражения в консоле
getTheMostExpensive(tab);
getAverageCheckPrice(tab);

