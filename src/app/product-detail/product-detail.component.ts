import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { IProduct } from '../product-list/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  queryParam:number;
  productList:IProduct[];
  product:IProduct;
  constructor(private route:ActivatedRoute, private router:Router, private productService:ProductService) { }
  
  ngOnInit() {
    this.queryParam = +this.route.snapshot.paramMap.get("id");
    this.productService.getProducts().subscribe(
      products => { 
        this.productList = products; 
        let filteredProduct = this.productList.filter(product=> {
          return (product.productId == this.queryParam); 
        });
        this.product = filteredProduct[0];
        console.log(this.product);
      });
  }
  redirectToProductList(): void {
    this.router.navigate(['productlist']);
  }

}
