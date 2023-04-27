import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-status',
  templateUrl: './basket-status.component.html',
  styleUrls: ['./basket-status.component.sass'],
})
export class BasketStatusComponent implements OnInit {
  badge: number = 0;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.basketUpdate$.subscribe((res) => {
      this.basketService.getBasket().subscribe((basket) => {
        if (basket && basket.items) {
          this.badge = basket.items
            .map((x) => x.quantity)
            .reduce((partialsum, q) => partialsum + q);
        } else {
          this.badge = 0;
        }
      });
    });
  }
}
