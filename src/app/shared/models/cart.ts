import { Product } from './product';
import { CartItem } from './cart-item';

export class Cart {
  items: CartItem[] = [];

  constructor(private _itemsMap: { [productId: string]: CartItem } = {}) {
    for ( let productId in _itemsMap ) {
      let item = _itemsMap[productId];

      this.items.push(new CartItem({ $key: productId, ...item }));
    }
  }

  getQuantity(product: Product) {
    let item = this._itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get totalItemsCount() {
    let count = 0;
    
    for ( let productId in this.items ) {        
      count += this.items[productId].quantity;
    }

    return count;
  }

  get totalPrice() {
    let sum = 0;

    for ( let productId in this.items ) {
      sum += this.items[productId].totalPrice;
    }

    return sum;
  }
}