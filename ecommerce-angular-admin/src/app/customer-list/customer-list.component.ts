import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from './../models/customer'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerAuth: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerAuth.getAllCustomers().subscribe(result=>{
      this.customers = result;
    });
  }

  deleteCustomer(id:string){
    if(confirm("Are you sure you want to delete this customer?")){
      this.customerAuth.removeById(id).subscribe(()=>{
        this.getCustomers(); //Refreshes and gets the customer database
      });
    }
  }

}
