import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  product!: IProduct;
  size!: 'XS' | 'S' | 'L' | 'M' | 'XL';
  amount: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.findProduct(res.get('id'))
    });
  }

  findProduct(id: string | null) {
    const result = this.cartService.products.find((item) => { return item.id === id });
    if (result) {
      this.product = result;
      return;
    }
    this.router.navigateByUrl('/not-found')
    // Me envie a la pagina de not found.
  }

  setSize(item: any) {
    this.size = item?.currentTarget?.value;
  }

  addProduct() {
    const total = [];
    for (let index = 0; index < this.amount; index++) {
      this.product.size = this.size;
      total.push({...this.product});
    }
    this.cartService.listTotalProducts(total);
  }
}
