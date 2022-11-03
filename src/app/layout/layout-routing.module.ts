import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailProductComponent } from '../components/detail-product/detail-product.component';
import { SectionMainComponent } from '../components/section-main/section-main.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SectionMainComponent,
      },
      {
        path: 'product/:id',
        component: DetailProductComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
