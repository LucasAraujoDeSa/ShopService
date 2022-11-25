import { IProductRepository, AddProductInput } from "../../src/add_product";

export class productRepositoryFake implements IProductRepository {
  private _datas: any = [];

  add(input: AddProductInput) {
    this._datas.push(input);
  }
}
