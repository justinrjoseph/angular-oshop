import { Component, Input } from '@angular/core';

import { CartService } from '../services/cart.service';

import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('cart') cart: Cart;
  
  constructor(private _cartService: CartService) {}

  addToCart() {
    this._cartService.add(this.product);
  }
}
