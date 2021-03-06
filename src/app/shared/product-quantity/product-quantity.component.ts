import { Component, Input } from '@angular/core';

import { Product } from '../models/product';
import { Cart } from '../models/cart';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('cart') cart: Cart;
  
  constructor(private _cartService: CartService) {}

  addToCart() {
    this._cartService.add(this.product);
  }

  removeFromCart() {
    this._cartService.remove(this.product);
  }
}
