import { AddProducts } from "../src/add_product";

test("Should add products", () => {
  const input = {
    name: "notebook",
    price: 2.0,
    quantity: 30,
  };

  const product = AddProducts.add(input);

  expect(product.quantity).toBe(30);
});
