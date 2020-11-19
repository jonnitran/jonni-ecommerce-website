import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from './../models/customer'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[];
  formData: any = {};
  errors: any = [];

  constructor(private customerAuth: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerAuth.getAllCustomers().subscribe(result=>{
      this.customers = result;
    }, (errorResponse)=>{
      this.errors.push(errorResponse.error.error);
    });
  }

  deleteCustomer(id:string){
    if(confirm("Are you sure you want to delete this company?")){
      console.log(id);
      this.customerAuth.removeById(id).subscribe(()=>{
        this.getCustomers();
      });
    }
  }

}
