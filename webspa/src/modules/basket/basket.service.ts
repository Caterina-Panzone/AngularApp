import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { IBasket } from '../shared/models/basket.model';
import { SecurityService } from '../shared/services/security.service';
import { BasketWrapperService } from '../shared/services/basket.wrapper.service';
import { IBasketItem } from '../shared/models/basketItem.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: IBasket = {
    buyerId: '',
    items: [
      {
        id: 'fasdf2',
        productId: 1,
        productName:
          'Conjuntos de Muebles de Jardín Exterior en Ratán 4 Piezas',
        unitPrice: 652.23,
        oldUnitPrice: 600,
        pictureUrl: 'https://picsum.photos/200',
        quantity: 5,
      },
      {
        id: 'fasdf3',
        productId: 2,
        productName: 'Reloj inteligente',
        unitPrice: 250,
        oldUnitPrice: 250,
        pictureUrl: 'https://picsum.photos/200',
        quantity: 2,
      },
    ],
  };

  private basketUpdateSource = new Subject<void>();
  basketUpdate$ = this.basketUpdateSource.asObservable();

  constructor(private basketWrapperService: BasketWrapperService) {
    this.basketWrapperService.addItemToBasket$.subscribe((item) => {
      this.addItemToBasket(item);
    });
  }

  setBasket(basket: IBasket): Observable<boolean> {
    this.basket = basket;
    this.basketUpdateSource.next();
    return of(true); //to-do: call endpoint
  }

  getBasket(): Observable<IBasket> {
    return of(this.basket); //to-do: call endpoint
  }

  addItemToBasket(item: IBasketItem): Observable<boolean> {
    let basketItem = this.basket.items.find(
      (value) => value.productId == item.productId
    );

    if (basketItem) {
      basketItem.quantity++;
    } else {
      this.basket.items.push(item);
    }

    return this.setBasket(this.basket);
  }

  dropBasket() {
    this.basket.items = [];
    this.setBasket(this.basket);
  }
}
