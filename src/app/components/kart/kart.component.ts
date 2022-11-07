import { Component, OnInit } from '@angular/core';

import cryptoRandomString from 'crypto-random-string';

import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';

declare var execute: any;

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent implements OnInit {

  totalProducts!: IProduct[];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.totalProducts$.subscribe((res) => {
      this.totalProducts = res;
      this.total = this.calculateTotal();
      console.log(this.totalProducts)
    });
  }

  calculateTotal(): number {
    let initialValue = 0;
    this.totalProducts.forEach((product) => {
      initialValue = product.price + initialValue
    });
    return initialValue;
  }

  deleteProduct(product: IProduct) {
    this.totalProducts = this.totalProducts.filter((item) => item.idProduct !== product.idProduct);
    this.cartService.removeProducts(this.totalProducts);
  }

  buyProducts() {
    if (this.totalProducts?.length > 0) {
      let totalValue = 0;
      const invoiceN = cryptoRandomString({ length: 15 });
      this.totalProducts.forEach((product) => {
        totalValue = product.price + totalValue;
      });
      execute(totalValue, invoiceN);
    }
  }
}
