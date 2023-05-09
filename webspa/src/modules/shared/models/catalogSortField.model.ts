export interface ICatalogSortField {
    name: CatalogFieldEnum;
    order: OrderEnum;
}

export enum CatalogFieldEnum {
    NAME = 'NAME',
    PRICE = 'PRICE',
    CURRENCY = 'CURRENCY'
}

export enum OrderEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
