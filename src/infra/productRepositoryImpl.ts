import {
  AddProductInput,
  AddProductOutput,
  GetProductOutput,
  GetProductsOutput,
  IAddProductRepository,
  IGetProductRepository,
  IGetProductsRepository,
} from "@/useCases";
import { PrismaClient } from "@prisma/client";

export class productRepositoryImpl
  implements
    IAddProductRepository,
    IGetProductsRepository,
    IGetProductRepository
{
  private _client = new PrismaClient();

  public async add(input: AddProductInput): Promise<AddProductOutput> {
    const product = await this._client.product.create({
      data: input,
    });

    return product;
  }

  public async getAll(): Promise<Array<GetProductsOutput>> {
    const product = await this._client.product.findMany();

    return product;
  }

  public async getById(id: string): Promise<GetProductOutput | undefined> {
    const product = await this._client.product.findFirst({
      where: {
        id: id,
      },
    });

    return product ? product : undefined;
  }
}
