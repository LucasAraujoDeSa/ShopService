import { productRepositoryImpl } from "@/infra/productRepositoryImpl";
import {
  GetProducts,
  GetProduct,
  AddProducts,
  AddProductInput,
} from "@/useCases";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller("product")
export class ProductController {
  private _productRepository = new productRepositoryImpl();
  private _getProducts = new GetProducts(this._productRepository);
  private _getProduct = new GetProduct(this._productRepository);
  private _addProducts = new AddProducts(this._productRepository);

  @Post()
  async create(@Body() productInput: AddProductInput) {
    const product = await this._addProducts.execute(productInput);

    return product;
  }

  @Get()
  findAll() {
    const products = this._getProducts.execute();

    return products;
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    const product = this._getProduct.execute(id);

    return product;
  }
}
