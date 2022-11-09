import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interface/IProduct.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  codResponse: number = 0;
  responseEpayco: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const sendMail = localStorage.getItem('sendEmail');

    if (sendMail && sendMail === 'yes') {
      this.getResponseTransaction();
    }
  }

  getResponseTransaction() {
    //Referencia de payco que viene por url
    const ref_payco = this.getQueryParam('ref_payco');
    //Url Rest Metodo get, se pasa la llave y la ref_payco como paremetro
    const urlapp = "https://secure.epayco.co/validation/v1/reference/" + ref_payco;
    this.cartService.getResponseEPayco(urlapp).subscribe({
      next: (res: any) => {
        if (res?.data) {
          this.responseEpayco = res.data;
          this.codResponse = res.data?.x_cod_response;
          this.validateStateCode();
        }
      },
      error: (err) => { console.log(err) }
    });
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
    this.cartService.sendMail('https://formspree.io/f/xknekbvz', this.convertToJson()
    ).subscribe(({
      next: (res) => {
        this.cleanLocalStorage();
      },
      error: (err) => {
        console.log(err)
      }
    }))
  }

  convertToJson() {
    const Cliente = JSON.parse(localStorage.getItem('form') as string)
    let products = JSON.parse(localStorage.getItem('products') as string) as IProduct[];

    const Productos = products.map((item) => {
      return {
        PRECIO: item.price,
        NOMBRE: item.name,
        TALLA: item.size
      }
    });

    return {
      IdEpayco: this.responseEpayco.x_transaction_id,
      IdFactura: this.responseEpayco.x_id_factura,
      Cliente,
      Productos
    }
  }

  cleanLocalStorage() {
    localStorage.removeItem('sendEmail');
    localStorage.removeItem('form');
    localStorage.removeItem('products');
    localStorage.setItem('sendEmail', 'not');
  }
}
