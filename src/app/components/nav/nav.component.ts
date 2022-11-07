import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  totalProducts!: IProduct[];

  constructor(
    private cartService: CartService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.cartService.totalProducts$.subscribe((res) => {
      this.totalProducts = res;
    });
  }

  changeRoute() {
    if (this.totalProducts.length > 0) {
      this.route.navigate(['/myKart']);
    }
  }

}
