import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {
  constructor(private _db: AngularFireDatabase) { }

  getAll() {
    return this._db.list('/products');
  }

  get(id) {
    return this._db.object(`/products/${id}`);
  }

  create(product) {
    return this._db.list('/products')
      .push(product);
  }

  update(id, product) {
    return this._db.object(`/products/${id}`)
      .update(product);
  }
  
  delete(productId) {
    return this._db.object(`/products/${productId}`)
      .remove();
  }
}
