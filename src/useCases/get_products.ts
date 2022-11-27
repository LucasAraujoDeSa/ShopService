export type GetProductsOutput = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface IGetProductsRepository {
  getAll: () => Promise<Array<GetProductsOutput>>;
}

export class GetProducts {
  constructor(protected _productRepository: IGetProductsRepository) {}

  public async execute(): Promise<Array<GetProductsOutput>> {
    const products = await this._productRepository.getAll();

    return products;
  }
}
