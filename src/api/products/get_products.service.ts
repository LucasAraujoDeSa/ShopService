import { Injectable } from "@nestjs/common";
import { GetProducts } from "@/useCases";
import { productRepositoryImpl } from "@/infra/productRepositoryImpl";

@Injectable()
export class GetProductsService extends GetProducts {
  _productRepository = new productRepositoryImpl();
}
