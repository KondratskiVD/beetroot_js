const toBuyList = [
  { prodName: "water", prodQtty: 5, prodBought: false },
  { prodName: "cider", prodQtty: 6, prodBought: true },
  { prodName: "cookies", prodQtty: 4, prodBought: false },
  { prodName: "towel", prodQtty: 2, prodBought: true },
  { prodName: "sunscreen", prodQtty: 1, prodBought: false },
];

function sortList() {
  toBuyList.sort((a) => (a.prodBought === true ? 1 : -1));
  console.log(toBuyList);
}

function addProduct(newProduct, bought = false) {
  for (let product of toBuyList) {
    if (product.prodName === newProduct) {
      return product.prodQtty++;
    }
  }

  toBuyList.push({ prodName: newProduct, prodQtty: 1, prodBought: bought });
}

function purchase(product) {
  for (let item of toBuyList) {
    if (item.prodName === product) {
      return (item.prodBought = true);
    }
  }

  addProduct(product, true);
}

addProduct("fan");
addProduct("cider");
purchase("tent");
purchase("water");
sortList();
