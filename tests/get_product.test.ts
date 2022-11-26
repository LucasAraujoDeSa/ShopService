import { GetProduct, AddProducts } from "@/index";
import { productRepositoryFake } from "@/tests/fakes/product_repository_fake";

const makeSut = () => {
  const productRepo = new productRepositoryFake();
  const addProducts = new AddProducts(productRepo);
  const sut = new GetProduct(productRepo);
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

describe("GetProduct", () => {
  test("Should return a product", () => {
    const { addProducts, sut } = makeSut();

    const input = mock();

    const newProduct = addProducts.execute(input);

    const product = sut.execute(newProduct.id);

    expect(product?.name).toBe("notebook");
  });

  test("Should return undefined if product not found", () => {
    const { sut } = makeSut();

    const product = sut.execute("id");

    expect(product).toBe(undefined);
  });
});
