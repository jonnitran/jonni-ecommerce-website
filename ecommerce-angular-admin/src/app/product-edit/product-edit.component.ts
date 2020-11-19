import { ProductService } from './../services/product.service';
import { CompanyService } from './../services/company.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product;
  id:string;
  companies: Company[];
  result:string;
  errors: any = [];
  

  constructor(private productService: ProductService, private route: ActivatedRoute, 
    private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];

    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
    })
    
    this.productService.getProductById(this.id).subscribe(result=>{
      this.product = result;
    });
  }

  SaveProduct(){
    this.productService.updateProductById(this.product, this.id).subscribe(()=>{
      this.router.navigate(['/../products-list/']);
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }
}
