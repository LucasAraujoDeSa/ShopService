import {
  IAddProductRepository,
  AddProductInput,
  AddProductOutput,
} from "@/add_product";

import { IGetProductsRepository, GetProductsOutput } from "@/get_products";

export class productRepositoryFake
  implements IAddProductRepository, IGetProductsRepository
{
  private _datas: Array<AddProductOutput> = [];

  public add(input: AddProductInput): AddProductOutput {
    const product = Object.assign({
      ...input,
      id: `product_${this._datas.length + 1}`,
    });

    this._datas.push(product);

    return product;
  }

  public getAll(): GetProductsOutput[] {
    return this._datas;
  }
}
