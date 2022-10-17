import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products!: IProduct[];

  constructor(private cartService: CartService) {
    this.products = this.cartService.products;
  }

  ngOnInit(): void {
  }

}
