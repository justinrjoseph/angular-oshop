import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';

@NgModule({
  imports: [
    ShoppingRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    OrdersComponent,
    ProductFilterComponent,
    CartSummaryComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }
