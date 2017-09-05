import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'angular-4-data-table';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminProductsComponent } from "app/admin/components/admin-products/admin-products.component";
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';

import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  providers: [AdminAuthGuard]
})
export class AdminModule { }
