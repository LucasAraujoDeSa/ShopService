export type GetProductsOutput = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface IGetProductsRepository {
  getAll: () => Array<GetProductsOutput>;
}

export class GetProducts {
  constructor(private _productRepository: IGetProductsRepository) {}

  public execute(): Array<GetProductsOutput> {
    const products = this._productRepository.getAll();

    return products;
  }
}
