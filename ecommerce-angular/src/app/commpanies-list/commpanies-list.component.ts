import { Component, OnInit } from '@angular/core';
import {CompanyService} from './../services/company.service'
import {Company} from './../models/company'

@Component({
  selector: 'app-commpanies-list',
  templateUrl: './commpanies-list.component.html',
  styleUrls: ['./commpanies-list.component.css']
})
export class CommpaniesListComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  companies: Company[];
  
  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      console.log(this.companies);
    })
  }
  

}
