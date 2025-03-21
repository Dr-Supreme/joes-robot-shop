import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';


//service is just a class
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];
  
  constructor() { }

  add(product: IProduct){
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }
}
