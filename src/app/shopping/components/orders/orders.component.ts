import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$;
  
  constructor(
    private _authService: AuthService,
    private _orderService: OrderService
  ) {}

  ngOnInit() {
    this.orders$ = this._authService.user$
      .switchMap((user) => this._orderService.getByUser(user.uid));
  }
}
