export function processShoppingList(list) {
  list.forEach((item) => {
    if (item.name.includes("oferta")) {
      item.price = item.price - item.price * 0.2;
    }

    item.price = item.price * item.quantity;

    delete item.quantity;
  });

  const total = list.reduce((totalPrice, item) => totalPrice + item.price, 0);

  return total;
}
