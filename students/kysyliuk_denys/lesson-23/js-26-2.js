let total = 0;
let receipt = [
    "RTX 3060 Ti(6):6000",
    "Intel Core i3-6100:100",
    "ASUS Prime H270-PLUS(1):70",
    "Райзеры(4):40",
    "HyperX Fury Black 2x4Gb(1):50",
    "Seagate Barracuda 500Gb(1):30",
    "Seasonic PRIME 1300 W GOLD(1):450",
    "Каркас(1):бутылка пива для алкаша Толика"
]
function receiptPrice () {
    if(true){
        console.log("Собираем ферму")
    }
    for(let i = 0; (i < receipt.length - 1); i++) {
        const subReceipt = receipt[i].split(':')
        let name = subReceipt[0]
        let receiptPrice = Number(subReceipt[1])
        // let biggestPrice = (Math.max(Number(subReceipt[1])) + " обошелся дороже всего")      
        total += receiptPrice
        itemText = name + ' — $' + receiptPrice
        console.log(itemText)
    }
}

let da = receiptPrice()
let average = (total / receipt.length)
console.log("______________________________")
console.log("Ферма обошлась в: $" + total + "," + " бутылка пива для алкаша Толика")
console.log("Средняя стоимость одного товара в чеке: " + average)


// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке
