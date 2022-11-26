import { PrismaClient } from "@prisma/client";
import { productRepositoryImpl } from "@/infra/productRepositoryImpl";

const prisma = new PrismaClient();

const makeSut = () => {
  const sut = new productRepositoryImpl();
  return { sut };
};

const mock = () => {
  return {
    name: "notebook",
    price: 2.0,
    quantity: 30,
  };
};

describe("productRepositoryImpl", () => {
  beforeAll(() => {
    const deleteProducts = prisma.product.deleteMany();
    prisma.$transaction([deleteProducts]);
  });

  afterEach(() => {
    const deleteProducts = prisma.product.deleteMany();
    prisma.$transaction([deleteProducts]);
  });

  afterAll(() => {
    const deleteProducts = prisma.product.deleteMany();
    prisma.$transaction([deleteProducts]);
    prisma.$disconnect();
  });

  test("should insert a product into database", async () => {
    const { sut } = makeSut();

    const input = mock();

    const product = await sut.add(input);

    expect(product.name).toEqual(input.name);
  });

  test("should return all products in database", async () => {
    const { sut } = makeSut();

    const input = mock();

    await sut.add(input);
    await sut.add(input);
    await sut.add(input);

    const products = await sut.getAll();

    expect(products.length).toEqual(3);
  });

  test("should return a product", async () => {
    const { sut } = makeSut();

    const input = mock();

    const product = await sut.add(input);

    const test = await sut.getById(product.id);

    expect(test?.name).toEqual(input.name);
  });
});
