import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../../../shared/models/product';

import { Subscription } from "rxjs/Subscription";

import { ProductService } from '../../../shared/services/product.service';

import { DataTableResource } from "angular-4-data-table/dist";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  
  subscription: Subscription;

  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.subscription = this._productService.getAll()
      .subscribe((products) => {
        this.products = products;
        this._initializeTable(products);
      });
  }

  filter(query: string) {
    let filteredProducts = (query) ?
      this.products.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase())
      }) :
      this.products;

    this._initializeTable(filteredProducts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reloadItems(params) {
    if ( !this.tableResource ) return;

    this.tableResource.query(params)
      .then((items) => this.items = items);
  }

  private _initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then((items) => this.items = items);
    this.tableResource.count()
      .then((count) => this.itemCount = count);
  }
}
