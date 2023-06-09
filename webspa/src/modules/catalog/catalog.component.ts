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
import { CatalogFieldEnum, ICatalogSortField, OrderEnum } from '../shared/models/catalogSortField.model';

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
  catalogSortField?: ICatalogSortField;
  catalogFieldEnum = CatalogFieldEnum;
  orderEnum = OrderEnum;

  constructor(
    private service: CatalogService,
    private basketService: BasketWrapperService,
    private securityService: SecurityService
  ) {
    this.authenticated = securityService.IsAuthorized;
  }

  ngOnInit(): void {
    this.getCatalog(10, 1);
    this.getCategories();

    this.securityService.authenticationChanged$.subscribe((res) => {
      this.authenticated = res;
    });
  }

  private getCatalog(
    pageSize: number,
    pageIndex: number,
    catalogSortField?: ICatalogSortField
  ): void {
    this.errorReceived = false;
    this.service
      .getCatalog(pageIndex, pageSize, catalogSortField)
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
    this.service.getCategories()
      .pipe(catchError((err) => this.handleError(err)))
      .subscribe((categories) => {
        this.categories = categories;
        let allCategories: ICatalogCategory = { id: 0, name: 'Todas', shortDesc: '', longDesc: '' };
        this.categories.unshift(allCategories);
      });
  }

  private handleError(error: any) {
    this.errorReceived = true;
    return throwError(() => error);
  }

  onPageChanged(value: any) {
    this.paginationInfo.actualPage = value;
    this.getCatalog(this.paginationInfo.itemsPage, value, this.catalogSortField);
  }

  orderBy(field: CatalogFieldEnum, order: OrderEnum) {
    this.catalogSortField = { name: field, order: order };
    this.getCatalog(this.paginationInfo.itemsPage, this.paginationInfo.actualPage, this.catalogSortField);
  }

  addToCart(item: ICatalogItem) {
    if (this.authenticated) {
      this.basketService.addItemToBasket(item);
    }
  }

  arrayOfSize(size: number): number[] {
    return Array(size).fill(0);
  }
}
