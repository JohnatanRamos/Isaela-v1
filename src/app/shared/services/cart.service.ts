import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interface/IProduct.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: IProduct[] = [{
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deserunt adipisci ut dolor eligendi!',
    shortDescription: 'Blusa + Short Rosa',
    frontPage: 'Zoe-1',
    images: ['zoe/zoe-2', 'zoe/zoe-3', 'zoe/zoe-4'],
    name: 'PIJAMA ZOE',
    price: 59000,
    id: '1'
  },
  {
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deserunt adipisci ut dolor eligendi!',
    shortDescription: 'Kimono Beige',
    frontPage: 'Lola',
    images: ['lola/lola-2', 'lola/lola-3', 'lola/lola-4'],
    name: 'KIMONO LOLA',
    price: 66000,
    id: '2'
  },
  {
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deserunt adipisci ut dolor eligendi!',
    shortDescription: 'Blusa + Short Negro',
    frontPage: 'Emma-1',
    images: ['emma/emma-2', 'emma/emma-3', 'emma/emma-4'],
    name: 'PIJAMA EMMA',
    price: 67000,
    id: '3'
  },
  {
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deserunt adipisci ut dolor eligendi!',
    shortDescription: 'Blusa + Short Gris',
    frontPage: 'Eva-1',
    images: ['eva/eva-2', 'eva/eva-3', 'eva/eva-4'],
    name: 'PIJAMA EVA',
    price: 67000,
    id: '4'
  },
  {
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deserunt adipisci ut dolor eligendi!',
    shortDescription: 'Blusa + Short Rosa',
    frontPage: 'Mara-1',
    images: ['mara/mara-2', 'mara/mara-3', 'mara/mara-4'],
    name: 'PIJAMA MARA',
    price: 59000,
    id: '5'
  }];

  private totalProducts = new BehaviorSubject<IProduct[]>([]);
  totalProducts$ = this.totalProducts.asObservable();

  constructor(private http: HttpClient) { }

  listTotalProducts(value: IProduct[]) {
    value.push(...this.totalProducts.getValue());

    this.totalProducts.next(value);
  }

  removeProducts(value: IProduct[]) {
    this.totalProducts.next(value);
  }

  getResponseEPayco(method: string) {
    return this.http.get(method);
  }

  sendMail(method: string, body: any) {
    return this.http.post(method, body, {
      headers: {
        'Accept': 'application/json'
      }
    });
  }
}
