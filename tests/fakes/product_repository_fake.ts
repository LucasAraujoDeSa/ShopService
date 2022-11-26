import {
  IAddProductRepository,
  AddProductInput,
  AddProductOutput,
  IGetProductsRepository,
  GetProductsOutput,
  IGetProductRepository,
  GetProductOutput,
} from "@/useCases/index";

export class productRepositoryFake
  implements
    IAddProductRepository,
    IGetProductsRepository,
    IGetProductRepository
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

  public getById(id: string): GetProductOutput | undefined {
    let myProduct = undefined;

    this._datas.forEach((product: GetProductOutput) => {
      if (product.id === id) {
        myProduct = product;
      }
    });

    return myProduct;
  }
}
