import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from 'angularfire2/database';

import { Product } from '../models/product';
import { Cart } from '../models/cart';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class CartService {
  constructor(private _db: AngularFireDatabase) { }

  async add(product: Product) {
    this._updateItem(product, 1);
  }

  async remove(product: Product) {
    this._updateItem(product, -1);
  }

  async clear() {
    let cartId = await this._getOrCreateCartId();
    this._db.object(`/carts/${cartId}/items`).remove();
  }

  private async _getOrCreateCartId() : Promise<string> {
    let cartId = localStorage.getItem('cartId');

    if ( cartId ) {
      return cartId;
    } else {
      let result = await this._create();
      localStorage.setItem('cartId', result.key);

      return result.key;
    }
  }

  async get() : Promise<Observable<Cart>> {
    let cartId = await this._getOrCreateCartId();
    return this._db.object(`/carts/${cartId}`)
      .map((obj) => new Cart(obj.items));
  }

  private _create() {
    return this._db.list('/carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private _getItem(cartId: string, productId: string) {
    return this._db.object(`/carts/${cartId}/items/${productId}`);
  }

  private async _updateItem(product: Product, change: number) {
    let cartId = await this._getOrCreateCartId();
    
    let item$ = this._getItem(cartId, product.$key);

    item$.take(1)
      .subscribe((item) => {
        let quantity = (item.quantity || 0) + change;

        if ( quantity === 0 ) {
          item$.remove()
        } else {
          item$.update({
            title: product.title,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity
          });
        }
      });
  }
}
