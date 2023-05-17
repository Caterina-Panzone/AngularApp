import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  errorReceived: boolean = false;

  constructor(private service: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders(): void {
    // this.errorReceived = false;
    // this.service.getOrders()
    //   .pipe(catchError((err) => this.handleError(err)))
    //   .subscribe(orders => {
    //     this.orders = orders;
    //   });
  }

  private handleError(error: any) {
    this.errorReceived = true;
    return throwError(() => error);
  }
}
