import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { BasketComponent } from './basket/basket.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'order', component: NewOrderComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
