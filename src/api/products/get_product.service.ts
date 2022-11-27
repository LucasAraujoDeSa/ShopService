import { Injectable } from "@nestjs/common";
import { GetProduct } from "@/useCases";
import { productRepositoryImpl } from "@/infra/productRepositoryImpl";

@Injectable()
export class GetProductService extends GetProduct {
  _productRepository = new productRepositoryImpl();
}
