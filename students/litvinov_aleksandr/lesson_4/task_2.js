
const products = [
    { name: 'Bread', count: 1, price: 15 },
    { name: 'Butter', count: 1, price: 80 },
    { name: 'Tomato', count: 5, price: 7 },
    { name: 'Cucumber', count: 3, price: 5 },
    { name: 'Apple', count: 10, price: 5 },
    { name: 'Pepsi', count: 2, price: 15 },
    { name: 'Sausages', count: 10, price: 18 }
]

const bill = (list) => {
    let itemPrice = 0
    let itemsPrice = []
    document.write('<p>BILL :</p> ');
    for (item of products) {
        itemPrice = item.price * item.count;
        itemsPrice.push(itemPrice)
        document.write(`${item.name} - ${item.price} x ${item.count} = ${itemPrice} </br> </br>`)
    } document.write('<hr style="width:170px; margin-left:0" >');
    let totalSum = products.reduce((total, item) => {
        return total + item.price * item.count
    }, 0)
    let sortList = itemsPrice.sort((a, b) => a - b)
    let maxPrice = sortList[sortList.length - 1];
    let average = Math.floor(totalSum / products.length)
    document.write(`<p>TOTAL SUM = ${totalSum} </p> `)
    document.write(`<p>MAX PRICE = ${maxPrice} </p>`)
    document.write(`<p>AVERAGE = ${average}</p>`)
}

bill(products)
