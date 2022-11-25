import { AddProducts } from "@/add_product";
import { GetProducts } from "@/get_products";
import { productRepositoryFake } from "@/tests/fakes/product_repository_fake";

const makeSut = () => {
  const productRepo = new productRepositoryFake();
  const addProducts = new AddProducts(productRepo);
  const sut = new GetProducts(productRepo);
  return {
    sut,
    addProducts,
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

describe("GetProducts", () => {
  test("Should list products", () => {
    const { addProducts, sut } = makeSut();

    const input = mock();

    addProducts.execute(input);
    addProducts.execute(input);
    addProducts.execute(input);

    const products = sut.execute();

    expect(products.length).toBe(3);
  });
});
