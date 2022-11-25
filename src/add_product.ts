export const AddProducts = {
  add({
    name,
    price,
    quantity,
  }: {
    name: string;
    price: number;
    quantity: number;
  }) {
    return {
      id: "productId",
      name: name,
      price: price,
      quantity: quantity,
    };
  },
};
