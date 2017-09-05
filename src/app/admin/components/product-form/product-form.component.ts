import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Category } from '../../../shared/models/category';
import { Product } from '../../../shared/models/product';

import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<Category[]>;
  product: Product = {};
  id: number;
  
  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.categories$ = this._categoryService.getAll();

    this.id = +this._route.snapshot.paramMap.get('id');

    if ( this.id ) {
      this._productService.get(this.id)
        .take(1)
        .subscribe((product) => this.product = product);
    }
  }

  save(product) {
    if ( this.id ) {
      this._productService.update(this.id, product);
    } else {
      this._productService.create(product);
    }

    this._router.navigate(['/admin/products']);
  }

  delete() {
    if ( !confirm('Are you sure you want to delete this product?') ) {
      return;
    }

    this._productService.delete(this.id);
    this._router.navigate(['/admin/products']);
  }
}
