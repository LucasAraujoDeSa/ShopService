import { Module } from "@nestjs/common";
import { ProductController } from "./products/product.controller";
import { AddProductService } from "./products/add_product.service";
import { GetProductService } from "./products/get_product.service";
import { GetProductsService } from "./products/get_products.service";

@Module({
  controllers: [ProductController],
  providers: [AddProductService, GetProductService, GetProductsService],
})
export class AppModule {}
