import { Component, OnInit } from '@angular/core';

import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
	templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

	products: Product[]; //Product array of model

	constructor(
		private productService: ProductService //DI for product service
	) { }

	
	//On page load, product commponents loads product array from product service which has the product objects.
	ngOnInit() {
		console.log(this.productService.findAll())
		this.products = this.productService.findAll();
	}


}