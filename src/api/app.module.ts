import { Module } from "@nestjs/common";
import { ProductController } from "./controllers/product.controller";

@Module({
  controllers: [ProductController],
})
export class AppModule {}
