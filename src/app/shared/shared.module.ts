import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation/dist';
import { DataTableModule } from 'angular-4-data-table/dist';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from "shared/services/auth-guard.service";
import { UserService } from './services/user.service';
import { OrderService } from "shared/services/order.service";
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    DataTableModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,    
    UserService,
    CategoryService,
    ProductService,
    CartService,
    OrderService
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot().ngModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    DataTableModule,
    ProductCardComponent,
    ProductQuantityComponent,
  ]
})
export class SharedModule { }
