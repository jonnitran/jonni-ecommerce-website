import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Item } from '../products/cartItem';
import { ProductService } from '../services/product.service';

@Component({
	templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {

	items: Item[] = [];
	total: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute, //DI for activatedroute
		private productService: ProductService	//DI for service
	) { }

	ngOnInit() {/* 
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};

				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item)); //convert json to string
					localStorage.setItem('cart', JSON.stringify(cart));
				} 
				else {
					let cart: any = JSON.parse(localStorage.getItem('cart')); //convert string to json
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]); //put everyitem from cart into the item object array
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		}); */
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}
	cartInfo:any;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		this.cartInfo= cart;
		console.log(cart); //Call post method to store cart details in db
	}

}