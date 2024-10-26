import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManageRoutingModule } from './product-manage-routing.module';
import { ProductmanagerComponent } from './productmanager/productmanager.component';


@NgModule({
  declarations: [
    ProductmanagerComponent
  ],
  imports: [
    CommonModule,
    ProductManageRoutingModule
  ]
})
export class ProductManageModule { }
