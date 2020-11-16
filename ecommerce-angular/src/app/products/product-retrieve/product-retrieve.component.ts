import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Product} from '../model.product';

@Component({
  selector: 'app-product-retrieve',
  templateUrl: './product-retrieve.component.html',
  styleUrls: ['./product-retrieve.component.css']
})
export class ProductRetrieveComponent implements OnInit {

  products: Array<Product>;
  flag:boolean = false;
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }
  loadProductInfo():void{
    this.flag =true;
    this.productService.gettAllProductDetails().subscribe(data=>{
      
    })
  }
}
