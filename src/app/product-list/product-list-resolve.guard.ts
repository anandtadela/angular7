import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolveGuard implements Resolve<IProduct[]> {
  constructor(private productService:ProductService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
    return this.productService.getProducts();
  }
 
}
