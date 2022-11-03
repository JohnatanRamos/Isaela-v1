import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SectionMainComponent,
    ListProductsComponent,
    DetailProductComponent,
    NotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
