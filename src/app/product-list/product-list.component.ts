import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle:string = "Product list";
 // filteredText:string = "test";
  imageWidth:number = 20;
  showHideImage:boolean = false;
  productList :IProduct[];
  constructor(private productService:ProductService) { }
  _filteredText:string;
  filteredProductList: IProduct[];
  get filteredText(): string {
    return this._filteredText;
  }
  set filteredText(value:string) {
    this._filteredText = value.toLowerCase();
    this.filteredProductList = this.productList.filter((product:IProduct)=> {
      return (product.productName.toLowerCase().indexOf(this.filteredText) !== -1) ;
    })
  }

  ngOnInit() {

    this.productService.getProducts().subscribe(
      products => { 
        this.productList = products; 
        this.filteredProductList = this.productList;
      });
  }
  showImage() : void {
   this.showHideImage = !this.showHideImage;
  }
  onRatingClicked(val): void {
    alert(val);
  }
 
}
