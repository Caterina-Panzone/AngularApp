import { ICatalogCategory } from "./catalogCategory.model";

export interface ICatalogItem {
  id: number;
  name: string;
  shortDesc: string;
  longDesc: string;
  priceCurrency: string;
  priceValue: number;
  smallImageUrl: string;
  largeImageUrl: string;
  slob: string;
  visible: boolean;
  categories: ICatalogCategory[];
}