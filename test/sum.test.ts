import { AddProducts } from "../src/add_product";
import { productRepositoryFake } from "./fakes/product_repository_fake";

const makeSut = () => {
  const productRepo = new productRepositoryFake();
  const sut = new AddProducts(productRepo);
  return {
    sut,
  };
};

describe("AddProducts", () => {
  test("Should add products", () => {
    const { sut } = makeSut();

    const input = {
      name: "notebook",
      price: 2.0,
      quantity: 30,
    };

    const product = sut.add(input);

    expect(product.quantity).toBe(30);
  });
});
