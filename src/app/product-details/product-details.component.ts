import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // products: IProduct[];
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();
  // filter: string = '';
  cart: IProduct [] = [];

  getImageURL(product: IProduct) {
    if(!product) return '';
    return 'assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit();
    console.log(`product ${product.name} added to cart`);
  }
  getDiscountedClasses(product: IProduct){
    if(product.discount > 0){
      return 'strike'
    }else{
      return ''
    }
  }
}
