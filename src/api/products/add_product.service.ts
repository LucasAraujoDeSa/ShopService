import { Injectable } from "@nestjs/common";
import { AddProducts } from "@/useCases";
import { productRepositoryImpl } from "@/infra/productRepositoryImpl";

@Injectable()
export class AddProductService extends AddProducts {
  _productRepository = new productRepositoryImpl();
}
