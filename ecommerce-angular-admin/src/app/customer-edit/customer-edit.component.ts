import { Component, OnInit } from '@angular/core';
import { Customer } from './../models/customer';
import { CustomerService } from './../services/customer.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  id: string;
  result: string;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];

    this.customerService.getCustomerById(this.id).subscribe(result=>{
      this.customer = result;
    })
  }

  updateCustomer(){
    this.customerService.update(this.customer, this.id).subscribe(()=>{
      this.router.navigate(['/customers-list']);
    });
  }

}
