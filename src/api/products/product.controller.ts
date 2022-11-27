import { productRepositoryImpl } from "@/infra/productRepositoryImpl";
import { GetProducts, GetProduct, AddProductInput } from "@/useCases";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AddProductService } from "./add_product.service";
import { GetProductService } from "./get_product.service";
import { GetProductsService } from "./get_products.service";

@Controller("product")
export class ProductController {
  // private _productRepository = new productRepositoryImpl();
  // private _getProducts = new GetProducts(this._productRepository);
  // private _getProduct = new GetProduct(this._productRepository);

  constructor(
    private _addProductService: AddProductService,
    private _getProductService: GetProductService,
    private _getProductsService: GetProductsService
  ) {}

  @Post()
  async create(@Body() productInput: AddProductInput) {
    const product = await this._addProductService.execute(productInput);

    return product;
  }

  @Get()
  findAll() {
    const products = this._getProductsService.execute();

    return products;
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    const product = this._getProductService.execute(id);

    return product;
  }
}
