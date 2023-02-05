import { AddProductInput } from "@/useCases";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from "@nestjs/swagger";
import { AddProductOutputSchema, AddProductInputSchema } from "../docs/schemas/add_product_entity";
import { AddProductService } from "./add_product.service";
import { GetProductService } from "./get_product.service";
import { GetProductsService } from "./get_products.service";

@Controller("product")
export class ProductController {
  constructor(
    private _addProductService: AddProductService,
    private _getProductService: GetProductService,
    private _getProductsService: GetProductsService
  ) {}
  
  //addProduct
  @ApiOperation({ summary: 'Create cat' })
  @ApiBody({ type: [AddProductInputSchema] })
  @ApiResponse({ 
    status: 201, 
    description: 'Created.',
    type: AddProductOutputSchema
  })
  @Post()
  async create(@Body() productInput: AddProductInput) {
    const product = await this._addProductService.execute(productInput);

    return product;
  }

  // getAllProducts
  @ApiOperation({ summary: 'get all products' })
  @ApiResponse({ 
    status: 200, 
    description: 'Success',
    isArray: true,
    type: AddProductOutputSchema
  })
  @Get()
  findAll() {
    const products = this._getProductsService.execute();

    return products;
  }

  // getProduct
  @ApiOperation({ summary: 'get product' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ 
    status: 200,  
    description: 'get product',
    type: AddProductOutputSchema
  })
  @Get(":id")
  findById(@Param("id") id: string) {
    const product = this._getProductService.execute(id);

    return product;
  }
}
