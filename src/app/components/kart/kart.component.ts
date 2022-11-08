import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import cryptoRandomString from 'crypto-random-string';

import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent implements OnInit {

  totalProducts!: IProduct[];
  total: number = 0;

  constructor(
    private cartService: CartService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cartService.totalProducts$.subscribe((res) => {
      this.totalProducts = res;
      this.total = this.calculateTotal();
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
      this.openModal(totalValue, invoiceN);
    }
  }

  openModal(totalValue: number, invoice: string) {
    this.dialog.open(FormComponent, {
      data: {
        totalValue,
        invoice,
        products: this.totalProducts
      }
    });
  }
}
