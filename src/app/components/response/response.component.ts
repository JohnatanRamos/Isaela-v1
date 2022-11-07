import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  totalProducts!: IProduct[];
  // responseEpayco: any;
  codResponse: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.totalProducts$.subscribe((res) => {
      this.totalProducts = res;
      console.log(this.totalProducts)
    });
    this.getResponseTransaction();
  }

  getResponseTransaction() {
    if (this.totalProducts.length > 0) {
      //Referencia de payco que viene por url
      const ref_payco = this.getQueryParam('ref_payco');
      //Url Rest Metodo get, se pasa la llave y la ref_payco como paremetro
      const urlapp = "https://secure.epayco.co/validation/v1/reference/" + ref_payco;
      this.cartService.getResponseEPayco(urlapp).subscribe({
        next: (res: any) => {
          if (res?.data) {
            this.codResponse = res.data?.x_cod_response;
            this.validateStateCode();
          }
        },
        error: (err) => { console.log(err) },
        complete: () => { console.log('complete') }
      });
    }
  }

  getQueryParam(param: string) {
    location.search.substr(1)
      .split("&")
      .some(function (item) { // returns first occurence and stops
        return item.split("=")[0] == param && (param = item.split("=")[1])
      })
    return param
  }

  validateStateCode() {
    if (this.codResponse !== 1) {
      return;
    }
    this.sendMail()
  }

  sendMail() {
    this.cartService.sendMail('https://formspree.io/f/mvoydpwb', {
      nombre: 'prueba'
    }).subscribe(({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    }))
  }
}
