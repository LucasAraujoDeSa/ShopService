import { AddProducts } from "../src/add_product";

test("Should add products", () => {
  const product = AddProducts.add();

  expect(product.amount).toBe(30);
});
