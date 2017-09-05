import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Product } from "../../../shared/models/product";
import { Cart } from '../../../shared/models/cart';

import { ProductService } from '../../../shared/services/product.service';
import { CartService } from '../../../shared/services/cart.service';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  category: string;

  cart$: Observable<Cart>;

  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.cart$ = await this._cartService.get();

    this._populateProducts();
  }

  private _populateProducts() {
    this._productService.getAll()
    .switchMap((products) => {
      this.products = products;
    
      return this._route.queryParamMap;
    })
    .subscribe((params: ParamMap) => {
      this.category = params.get('category');

      this._applyFilter();
    });
  }

  private _applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter((product) => {
      return this.category === product.category
    }) :
    this.products;
  }
}
