import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  companies: Company[];
  _id:Number;
  name:string;
  price:Number;
  image:string;
  company:string;
  result:string;
  errors: any = [];

  constructor(private productService: ProductService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    });
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
    });
  }

  addNewProduct(){
    var newProduct = new Product();
    this.productService.addProduct(newProduct).subscribe(data=>{
      this.result=data.msg;
      this.getProducts();
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }

  deleteProduct(id:Number){
    if(confirm("Are you sure you want to delete this Product?")){
      this.productService.deleteProductById(id).subscribe(()=>{
        this.getProducts();
      });
    }
  }
}