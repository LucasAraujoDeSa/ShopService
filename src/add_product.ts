export type AddProductInput = {
  name: string;
  price: number;
  quantity: number;
};

export interface IProductRepository {
  add: (input: AddProductInput) => void;
}

export class AddProducts {
  constructor(private productRepository: IProductRepository) {}

  public add({ name, price, quantity }: AddProductInput) {
    this.productRepository.add({
      name,
      price,
      quantity,
    });

    return {
      id: "productId",
      name: name,
      price: price,
      quantity: quantity,
    };
  }
}
