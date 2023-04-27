import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { catchError, throwError } from 'rxjs';
import { ICatalog } from '../shared/models/catalog.model';
import { IPager } from '../shared/models/pager.model';
import { ICatalogCategory } from '../shared/models/catalogCategory.model';
import { ICatalogItem } from '../shared/models/catalogItem.model';
import { BasketWrapperService } from '../shared/services/basket.wrapper.service';
import { SecurityService } from '../shared/services/security.service';
import { IBasket } from '../shared/models/basket.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass'],
})
export class CatalogComponent implements OnInit {
  categories!: ICatalogCategory[];
  categorySelected: number = 0;
  catalog!: ICatalog;
  paginationInfo!: IPager;
  errorReceived: boolean = false;
  authenticated: boolean = false;
  currentBasket!: IBasket;

  constructor(
    private service: CatalogService,
    private basketService: BasketWrapperService,
    private securityService: SecurityService
  ) {
    this.authenticated = securityService.IsAuthorized;
  }

  ngOnInit(): void {
    this.getCatalog(12, 1);
    this.getCategories();

    this.securityService.authenticationChallenge$.subscribe((res) => {
      this.authenticated = res;
    });
  }

  private getCatalog(
    pageSize: number,
    pageIndex: number,
    category?: number
  ): void {
    this.errorReceived = false;
    this.service
      .getCatalog(pageIndex, pageSize, category ?? 0)
      .pipe(catchError((err) => this.handleError(err)))
      .subscribe((catalog) => {
        this.catalog = catalog;
        this.paginationInfo = {
          actualPage: catalog.pageIndex,
          itemsPage: catalog.pageSize,
          totalItems: catalog.count,
          totalPages: Math.ceil(catalog.count / catalog.pageSize),
          items: catalog.pageSize,
        };
      });
  }

  private getCategories(): void {
    this.service.getCategories().subscribe((categories) => {
      this.categories = categories;
      let allCategories: ICatalogCategory = { id: 0, category: 'Todas' };
      this.categories.unshift(allCategories);
    });
  }

  private handleError(error: any) {
    this.errorReceived = true;
    return throwError(() => error);
  }

  onPageChanged(value: any) {
    this.paginationInfo.actualPage = value;
    this.getCatalog(this.paginationInfo.itemsPage, value);
  }

  addToCart(item: ICatalogItem) {
    if (this.authenticated) {
      this.basketService.addItemToBasket(item);
    }
  }
}
