export interface ICatalogItem {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUri: string;
  catalogCategoryId: number;
  catalogCategory: string;
  units: number;
}
