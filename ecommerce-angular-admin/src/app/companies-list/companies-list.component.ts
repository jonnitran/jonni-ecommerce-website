import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[];
  _id:string ="";
  name:string="";
  result:string;
  errors: any = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }

  addNewCompany(){
    var newCompany=new Company();
    this.companyService.addCompany(newCompany).subscribe(data=>{
      this.result=data.msg;
      this.getCompanies();
    });
  }

  deleteCompany(id:string){
    if(confirm("Are you sure you want to delete this company?")){
      console.log(id);
      this.companyService.deleteCompanyById(id).subscribe(()=>{
        this.getCompanies();
      });
    }
  }
}