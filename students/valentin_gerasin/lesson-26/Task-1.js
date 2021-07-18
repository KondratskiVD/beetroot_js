const list = [
    {
        product: 'beer',
        count: 10,
        isBought: true
    },
    {
        product: 'cream',
        count: 1,
        isBought: false
    },
    {
        product: 'umbrella',
        count: 2,
        isBought: true
    },
    {
        product: 'bread',
        count: 1,
        isBought: false
    },
    {
        product: 'hairdryer',
        count: 1,
        isBought: true
    }
]

const notBoughtProducts = []
const boughtProducts = []


for (let item of list) {
    if (item.isBought) {
        notBoughtProducts.push(item)
    } else {
        boughtProducts.push(item)
    }
}
console.log([...boughtProducts, ...notBoughtProducts]);

const newItem = prompt('Введите название продукта для покупки')
const addProduct = (newProduct) => {
    let x = false;
    for (let item of list) {
        if (item.product === newItem) {
            item.count += 1;
            x = true;
            break
        }
    }
    if (x == false) {
        list.push(
            {
                product: newItem,
                count: 1,
                status: false
            }
        )
    }
}
addProduct(newItem);
console.log(list);


const changeStatus = () => {
    for (let item of list) {
        if (item.product === newItem) {
            item.status = true;
        }
    }
}
changeStatus(newItem);
console.log(list);
