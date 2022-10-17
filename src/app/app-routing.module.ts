import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SectionMainComponent } from './components/section-main/section-main.component';

const routes: Routes = [
  {
    path: 'product/:id',
    component: DetailProductComponent
  },
  {
    path: '',
    component: SectionMainComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
