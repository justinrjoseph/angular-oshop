import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { CartService } from './cart.service';

@Injectable()
export class OrderService {
  constructor(
    private _db: AngularFireDatabase,
    private _cartService: CartService
  ) { }

  async place(order) {
    let result = await this._db.list('/orders').push(order);

    this._cartService.clear();

    return result;
  }

  get() { 
    return this._db.list('/orders');
  }

  getByUser(userId: string) {
    return this._db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    });
  }
}
