const list = [
    {
        product: 'beer',
        count: 10,
        isBought: true
    },
    {
        product: 'cream',
        count: 1,
        isBought: true
    },
    {
        product: 'umbrella',
        count: 2,
        isBought: false
    },
    {
        product: 'bread',
        count: 2,
        isBought: false
    },
    {
        product: 'hairdryer',
        count: 1,
        isBought: true
    }

]

const boughtProduct = [];
const notBoughtProduct = [];

const sortArray = (products) => {
    for (let item of list) {
        if (item.isBought) {
            boughtProduct.push(item)
        } else {
            notBoughtProduct.push(item)
        }
    }
}
sortArray(list)

console.log(notBoughtProduct.concat(boughtProduct));

let ifExistProduct = false;
const add = (newItem) => {
    for (item of list) {
        if (item.product === newItem) {
            item.count += 1
            ifExistProduct = true
        }

    } if (!ifExistProduct) {
        list.push(
            {
                product: newItem,
                count: 1,
                isBought: false
            }
        )
    }
}
add('fish')

console.log(list);

const changeStatus = (name) => {
    for (item of list) {
        if (item.product === name) {
            item.isBought = true;
        }
    }
}
changeStatus('fish');
console.log(list);
