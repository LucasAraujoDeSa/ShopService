type IAddProductInput = {
  name: string;
  price: number;
  quantity: number;
};

export const AddProducts = {
  add({ name, price, quantity }: IAddProductInput) {
    return {
      id: "productId",
      name: name,
      price: price,
      quantity: quantity,
    };
  },
};
