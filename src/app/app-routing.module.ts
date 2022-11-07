import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResponseComponent } from './components/response/response.component';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'response',
    component: ResponseComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
