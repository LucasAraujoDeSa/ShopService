export type AddProductInput = {
  name: string;
  price: number;
  quantity: number;
};

export type AddProductOutput = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface IAddProductRepository {
  add: (input: AddProductInput) => AddProductOutput;
}

export class AddProducts {
  constructor(private productRepository: IAddProductRepository) {}

  public add({ name, price, quantity }: AddProductInput): AddProductOutput {
    const product = this.productRepository.add({
      name,
      price,
      quantity,
    });

    return product;
  }
}
