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
  add: (input: AddProductInput) => Promise<AddProductOutput>;
}

export class AddProducts {
  constructor(private _productRepository: IAddProductRepository) {}

  public async execute({
    name,
    price,
    quantity,
  }: AddProductInput): Promise<AddProductOutput> {
    const product = await this._productRepository.add({
      name,
      price,
      quantity,
    });

    return product;
  }
}
