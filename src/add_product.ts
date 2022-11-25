export type AddProductInput = {
  name: string;
  price: number;
  quantity: number;
};

export interface IProductRepository {
  add: (input: AddProductInput) => void;
}

export const AddProducts = {
  add(
    { name, price, quantity }: AddProductInput,
    productRepository: IProductRepository
  ) {
    productRepository.add({
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
  },
};
