import { Cart } from './cart';

export class Order {
  datePlaced = new Date().getTime();
  items: any[];

  constructor(
    public userId: string,
    public shipping: any,
    cart: Cart
  ) {
    this.items = cart.items.map((item) => {
      return {
        product: {
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl
        },
        quantity: item.quantity,
        totalPrice: item.totalPrice
      };
    })
  }
}