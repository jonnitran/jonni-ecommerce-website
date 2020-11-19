import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    return this.companyService.getCompanies()
      .subscribe(
        companies => {
          console.log(companies);
          this.companies = companies
        }
      );
  }
}
