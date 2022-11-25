import { AddProducts } from "@/add_product";
import { productRepositoryFake } from "@/tests/fakes/product_repository_fake";

const makeSut = () => {
  const productRepo = new productRepositoryFake();
  const sut = new AddProducts(productRepo);
  return {
    sut,
    productRepo,
  };
};

const mock = () => {
  return {
    name: "notebook",
    price: 2.0,
    quantity: 30,
  };
};

describe("AddProducts", () => {
  test("Should add products", () => {
    const { sut } = makeSut();

    const input = mock();

    const product = sut.add(input);

    expect(product.quantity).toBe(30);
  });

  test("Should save data into products database", () => {
    const { sut, productRepo } = makeSut();

    const input = mock();

    const productRepoSpy = jest.spyOn(productRepo, "add");

    sut.add(input);

    expect(productRepoSpy).toHaveBeenCalledWith(input);
  });
});
