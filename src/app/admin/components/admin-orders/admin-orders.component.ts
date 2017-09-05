import { Component, OnInit } from '@angular/core';

import { OrderService } from "../../../shared/services/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;
  
  constructor(private _orderService: OrderService) {}

  ngOnInit() {
    this.orders$ = this._orderService.get();
  }
}
