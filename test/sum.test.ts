import { AddProducts } from "../src/add_product";
import { productRepositoryFake } from "./fakes/product_repository_fake";

test("Should add products", () => {
  const repo = new productRepositoryFake();

  const input = {
    name: "notebook",
    price: 2.0,
    quantity: 30,
  };

  const product = AddProducts.add(input, repo);

  expect(product.quantity).toBe(30);
});
