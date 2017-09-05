import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Cart } from '../../../shared/models/cart';

import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {  
  cart$: Observable<Cart>;

  constructor(
    private _cartService: CartService
  ) {}

  async ngOnInit() {
    this.cart$ = await this._cartService.get();
  }
}
