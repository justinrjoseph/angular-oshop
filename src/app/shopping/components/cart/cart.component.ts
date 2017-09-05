import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Cart } from '../../../shared/models/cart';

import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$: Observable<Cart>;

  constructor(private _cartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this._cartService.get();
  }

  clear() {
    this._cartService.clear();
  }
}
