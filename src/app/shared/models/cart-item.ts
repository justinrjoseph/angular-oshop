import { Product } from './product';

export class CartItem {
  $key: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;

  constructor(init?: Partial<CartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}