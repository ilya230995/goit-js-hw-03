const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const props of allProdcuts) {
    let total;
    if (props.name === productName) {
      const { name, price, quantity } = props;
      total = price * quantity;
      return total;
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); //

// console.log(calculateTotalPrice(products, "Дроид")); //