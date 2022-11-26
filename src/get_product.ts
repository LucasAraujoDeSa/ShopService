export type GetProductOutput = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface IGetProductRepository {
  getById: (id: string) => GetProductOutput | undefined;
}

export class GetProduct {
  constructor(private _productRepository: IGetProductRepository) {}

  public execute(id: string): GetProductOutput | undefined {
    const product = this._productRepository.getById(id);

    return product;
  }
}
