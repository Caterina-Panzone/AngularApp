import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders.component';



@NgModule({
  declarations: [
    NewOrderComponent,
    OrderDetailComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
