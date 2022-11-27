export type GetProductOutput = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface IGetProductRepository {
  getById: (id: string) => Promise<GetProductOutput | undefined>;
}

export class GetProduct {
  constructor(protected _productRepository: IGetProductRepository) {}

  public async execute(id: string): Promise<GetProductOutput | undefined> {
    const product = await this._productRepository.getById(id);

    return product;
  }
}
