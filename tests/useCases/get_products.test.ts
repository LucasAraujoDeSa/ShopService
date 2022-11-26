import { AddProducts } from "@/useCases/add_product";
import { GetProducts } from "@/useCases/get_products";
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
  test("Should list products", async () => {
    const { addProducts, sut } = makeSut();

    const input = mock();

    await addProducts.execute(input);
    await addProducts.execute(input);
    await addProducts.execute(input);

    const products = await sut.execute();

    expect(products.length).toBe(3);
  });
});
