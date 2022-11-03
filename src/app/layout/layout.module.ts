import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DetailProductComponent } from '../components/detail-product/detail-product.component';
import { ListProductsComponent } from '../components/list-products/list-products.component';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SectionMainComponent } from '../components/section-main/section-main.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
