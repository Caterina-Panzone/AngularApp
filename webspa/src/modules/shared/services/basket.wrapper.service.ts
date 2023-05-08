import { Injectable } from '@angular/core';
import { IBasket } from '../models/basket.model';
import { Subject } from 'rxjs';
import { IBasketItem } from '../models/basketItem.model';
import { ICatalogItem } from '../models/catalogItem.model';
import { SecurityService } from './security.service';
import { Guid } from 'src/guid';

@Injectable({
  providedIn: 'root',
})
export class BasketWrapperService {
  public basket!: IBasket;

  constructor(private identityService: SecurityService) {}

  // observable that is fired when a product is added to the cart
  private addItemToBasketSource = new Subject<IBasketItem>();
  addItemToBasket$ = this.addItemToBasketSource.asObservable();

  private orderCreatedSource = new Subject<void>();
  orderCreated$ = this.orderCreatedSource.asObservable();

  addItemToBasket(item: ICatalogItem) {
    if (this.identityService.IsAuthorized) {
      let basketItem: IBasketItem = {
        pictureUrl: item.smallImageUrl,
        productId: item.id,
        productName: item.name,
        quantity: 1,
        unitPrice: item.priceValue,
        id: Guid.newGuid(),
        oldUnitPrice: 0,
      };

      this.addItemToBasketSource.next(basketItem);
    } else {
      this.identityService.Authorize();
    }
  }

  orderCreated() {
    this.orderCreatedSource.next();
  }
}
