import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductListResolveGuard } from '../product-list/product-list-resolve.guard';
import { ProductListResolveComponent } from '../product-list-resolve/product-list-resolve.component';
import { ProductDetailGuard } from '../product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
//const productRouts = ;
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductListResolveComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
