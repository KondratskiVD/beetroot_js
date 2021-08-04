const check = [
  { prodName: "nails", prodQtty: 100, pricePerUnit: 1 },
  { prodName: "hammer", prodQtty: 1, pricePerUnit: 15 },
  { prodName: "beer", prodQtty: 1, pricePerUnit: 3 },
];

function print(arr) {
  let sum = 0;
  for (let item of arr) {
    console.log(
      `${item.prodName} - ${item.prodQtty}pcs * ${item.pricePerUnit}$ = ${
        item.prodQtty * item.pricePerUnit
      }$`
    );
    sum += item.pricePerUnit * item.prodQtty;
  }

  arr.sort((a, b) =>
    a.pricePerUnit * a.prodQtty > b.pricePerUnit * b.prodQtty ? -1 : 1
  );

  const avgPurchase = sum / arr.length,
    finalRes = `Total sum ${sum}$, the most expensive item is ${
      check[0].prodName
    } (${
      arr[0].pricePerUnit * check[0].prodQtty
    }$). Average price of purchase in this check is ${avgPurchase.toFixed(2)}$`;

  console.log(finalRes);
}
print(check);
