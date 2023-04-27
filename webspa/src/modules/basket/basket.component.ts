import { Component, OnInit } from '@angular/core';
import { IBasket } from '../shared/models/basket.model';
import { BasketService } from './basket.service';
import { Router } from '@angular/router';
import { BasketWrapperService } from '../shared/services/basket.wrapper.service';
import { IBasketItem } from '../shared/models/basketItem.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.sass'],
})
export class BasketComponent implements OnInit {
  errorMessages: any;
  basket: IBasket = { items: [], buyerId: '' };
  totalPrice: number = 0;

  constructor(
    private basketSerive: BasketService,
    private router: Router,
    private basketWrapperService: BasketWrapperService
  ) {}

  ngOnInit() {
    this.basketSerive.getBasket().subscribe((basket) => {
      this.basket = basket;
      this.calculateTotalPrice();
    });
  }

  private calculateTotalPrice() {
    this.totalPrice =
      this.basket && this.basket.items?.length > 0
        ? this.basket.items
            .map((x) => x.unitPrice * x.quantity)
            .reduce((partialsum, item) => partialsum + item)
        : 0;
  }

  deleteItem(id: String) {
    this.basket.items = this.basket.items.filter((item) => item.id !== id);
    this.basketSerive.setBasket(this.basket);
    this.calculateTotalPrice();
  }

  updateItemQuantity(item: IBasketItem, quantity: number) {
    item.quantity = quantity > 0 ? quantity : 1;
    this.basketSerive.setBasket(this.basket);
    this.calculateTotalPrice();
  }
}
