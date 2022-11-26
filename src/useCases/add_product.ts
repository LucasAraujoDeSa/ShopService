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
  constructor(private _productRepository: IAddProductRepository) {}

  public execute({ name, price, quantity }: AddProductInput): AddProductOutput {
    const product = this._productRepository.add({
      name,
      price,
      quantity,
    });

    return product;
  }
}
