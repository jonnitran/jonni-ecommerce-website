import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[]; //Product array

  constructor(public httpClient:HttpClient) { //DI for HttpClient
    
   } 

  gettAllProductDetails():Observable<Product[]>{ 
    return this.httpClient.get<Product[]>("http://localhost:9090/product/productFromDb");
  }

  storeProductDetailsInDb(prodRef):Observable<any>{
    return this.httpClient.post("http://localhost:9090/product/storeProduct",prodRef); //Displays to webpage
    //this.httpClient.post("http://localhost:9090/product/storeProduct",prodRef).subscribe(result=> console.log(result),error=>console.log(error)); //Displays to console
    
  }

  deleteProductById(prodId):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/product/deleteProductById/" + prodId);

  }

  updateProductDetailsInDb(prodRef):Observable<any>{
    return this.httpClient.post("http://localhost:9090/product/updateProduct",prodRef); //Displays to webpage
    //this.httpClient.post("http://localhost:9090/product/storeProduct",prodRef).subscribe(result=> console.log(result),error=>console.log(error)); //Displays to console
    
  }

  findAll(): Product[] {  //returns the array from constructor. Use HttpClient call get API
    return this.products;
}



find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        /* if (this.products[i].id == id) {
            return i;
        } */
    }
    return -1;
}
}
