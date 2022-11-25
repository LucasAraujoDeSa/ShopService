import {
  IProductRepository,
  AddProductInput,
  AddProductOutput,
} from "@/add_product";

export class productRepositoryFake implements IProductRepository {
  private _datas: Array<AddProductOutput> = [];

  add(input: AddProductInput): AddProductOutput {
    const product = Object.assign({
      ...input,
      id: `product_${this._datas.length + 1}`,
    });

    this._datas.push(product);

    return product;
  }
}
