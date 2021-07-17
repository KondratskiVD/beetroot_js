//1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.


const shoppingList = [
    {
        product: 'milk',
        quantity: 1,
        isBought: true
    },
    {
        product: 'bread',
        quantity: 1,
        isBought: false
    },
    {
        product: 'butter',
        quantity: 3,
        isBought: true
    },
    {
        product: 'meat',
        quantity: 2,
        isBought: true
    },
];
console.log(shoppingList);


//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

const newList = [];
for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].isBought) {
        newList.push(shoppingList[i]);
    }
    else {
        newList.unshift(shoppingList[i]);
    }
}
console.log(newList);


//Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.


const newItem = 'milk';
let ifExistProduct = false;

for (let item of shoppingList) {
    if (item.product === newItem) {
        item.quantity += 1;
        ifExistProduct = true;
    }
}
    if (!ifExistProduct) {
        shoppingList.push(
            {
            product: newItem,
            quantity: 2,
            isBought: false
            }
        )
    }

console.log(shoppingList);


//Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const productName = 'bread';
function doBought() {
    for (let item of shoppingList) {
        if (item.product === productName) {
            item.isBought = true;    
        }
    }
    return shoppingList;
}
doBought(productName)
console.log(shoppingList);