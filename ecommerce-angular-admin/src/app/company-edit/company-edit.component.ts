import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  company:Company;
  id:string;
  result:string;
  errors: any = [];

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
    
    this.companyService.getCompanyById(this.id).subscribe(result=>{
      this.company = result;
    });
  }

  SaveCompany(){
    this.companyService.updateCompanyById(this.company, this.id).subscribe(()=>{
      this.router.navigate(['/../companies-list/']);
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }
}
