//2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:


const newShoppingList = [
    {
        product: 'Milk',
        quantity: 2,
        price: 27
    },
    {
        product: 'Bread',
        quantity: 1,
        price: 16
    },
    {
        product: 'Butter',
        quantity: 3,
        price: 45
    },
    {
        product: 'Meat',
        quantity: 2,
        price: 150
    },
];
console.log(newShoppingList);


//Распечатка чека на экран;

document.write('<ol start="1">');
newShoppingList.forEach( shoppingItem => {
    document.write(`<li><span style="color: #9a0909">${shoppingItem.product} </span><span style="color: #1a55cc; margin-left: 250px"> ${shoppingItem.quantity} </span>
    <span style="font-weight: bold; margin-left: 50px">${shoppingItem.price}</span>`);
    }
);
document.write('<ol>');


//Подсчет общей суммы покупки;

function calcShoppingSum() {
    let sum = 0;
    for (let i = 0; i < newShoppingList.length; i++) {
        sum += newShoppingList[i].price * newShoppingList[i].quantity;
    }
    return sum;
}
alert(`Сумма покупки: ${calcShoppingSum()} грн`);


//Получение самой дорогой покупки в чеке;

function getMostExpensivePurchase() {
    let mostExpensivePurchase = 0;
    for (let i = 0; i < newShoppingList.length; i++) {
        mostExpensivePurchase = Math.max(newShoppingList[i].price * newShoppingList[i].quantity, mostExpensivePurchase);
    }
    for (let k = 0; k < newShoppingList.length; k++) {
        if (mostExpensivePurchase === newShoppingList[k].price * newShoppingList[k].quantity) {
            console.log(mostExpensivePurchase);
            return newShoppingList[k] ;
        }
    }
}
console.log(getMostExpensivePurchase());


//Подсчет средней стоимости одного товара в чеке.

function calcAverageProductCost() {
    let averageProductCost = calcShoppingSum() / newShoppingList.length;
    return averageProductCost;
}
alert(`${calcAverageProductCost()} грн`);

