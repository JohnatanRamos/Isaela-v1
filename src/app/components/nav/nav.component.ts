import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import cryptoRandomString from 'crypto-random-string';

declare var execute: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  totalProducts!: IProduct[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.totalProducts$.subscribe((res) => {
      this.totalProducts = res;
    });
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
