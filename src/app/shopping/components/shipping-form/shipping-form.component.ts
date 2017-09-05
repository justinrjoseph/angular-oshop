import { Component, OnInit, Input } from '@angular/core';

import { Cart } from '../../../shared/models/cart';

import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';

import { Router } from '@angular/router';

import { Order } from '../../../shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart: Cart;
  
  userId: string;
  shipping = {};
  
  userSubscription: Subscription;

  constructor(
    private _authService: AuthService,
    private _orderService: OrderService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.userSubscription = this._authService.user$
      .subscribe((user) => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(
      this.userId,
      this.shipping,
      this.cart
    );

    let result = await this._orderService.place(order);

    this._router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
