const list = [
    {
        product: 'bear',
        count: 10,
        status: true
    },
    {
        product: 'cream',
        count: 1,
        status: false
    },
    {
        product: 'umbrella',
        count: 2,
        status: false
    },
    {
        product: 'bread',
        count: 1,
        status: false
    },
    {
        product: 'hairdryer',
        count: 1,
        status: true
    },   
]

const boughtProducts = []
const notBoughtProducts = []

for (let item of list) {
    if(item.status) {
        boughtProducts.push(item);
    } else {
        notBoughtProducts.push(item)
    }
}

console.log([...boughtProducts, ...notBoughtProducts]);

const newItem = prompt('Введите продукт для покупки')
const addProduct = (newProduct) => {
    let flag = false;
    for (let item of list) {
        if(item.product === newItem) {
            item.count += 1;
            flag = true;
            break
        } 
    }
    if(flag == false) {
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

const boughtProduct = prompt('Введите продукт который купили')
const changeStatus = () => {
    for (let item of list) {
        if (item.product === boughtProduct) {
            item.status = true;
        }
    }
}
changeStatus(boughtProduct);
console.log(list);