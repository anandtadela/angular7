import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductDetailGuard } from '../product-detail/product-detail.guard';
import { ProductListResolveComponent } from '../product-list-resolve/product-list-resolve.component';
import { ProductListResolveGuard } from '../product-list/product-list-resolve.guard';
const productRoutes: Routes = [
  {path:'productlist', component:ProductListComponent},
  {path:'product-detail/:id',component:ProductDetailComponent, canActivate:[ProductDetailGuard]},
  {path:'product-list-resolve',component:ProductListResolveComponent, resolve:{
    productList:ProductListResolveGuard}
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
