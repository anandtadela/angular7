import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/product';

@Component({
  selector: 'app-product-list-resolve',
  templateUrl: './product-list-resolve.component.html',
  styleUrls: ['./product-list-resolve.component.css']
})
export class ProductListResolveComponent implements OnInit {
  productList:IProduct[];
  constructor(private _route:ActivatedRoute) { 
   this.productList =  _route.snapshot.data['productList'];
  }

  ngOnInit() {
    
  }

}
