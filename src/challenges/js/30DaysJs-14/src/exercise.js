export function groupProducts(products, category) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const productsName = filteredProducts
    .map((product) => product.name)
    .join(", ");

  const totalPrice = filteredProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return {
    products: productsName,
    totalPrice,
  };
}
