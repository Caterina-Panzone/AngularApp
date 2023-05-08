import { Injectable } from '@angular/core';
import { ICatalog } from '../shared/models/catalog.model';
import { Observable, map } from 'rxjs';
import { ICatalogCategory } from '../shared/models/catalogCategory.model';
import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private catalogUrl: string = '';

  constructor(private service: HttpService) {
    this.catalogUrl = 'http://localhost:3000/catalog';
  }

  getCatalog(
    pageIndex: number,
    pageSize: number
  ): Observable<ICatalog> {
    const query = "query GetCatalog($limit: Int, $offset: Int) {catalog(limit: $limit, offset: $offset) {count products {id name shortDesc longDesc priceCurrency priceValue visible smallImageUrl largeImageUrl slob categories {id name}}}}";
    let variables = {
      limit: pageSize,
      offset: (pageIndex-1) * pageSize
    }
    return this.service.post(this.catalogUrl, {'query': query, 'variables': variables }).pipe<ICatalog>(
        map((response: any) => {
          return {
            pageIndex: pageIndex,
            pageSize: pageSize,
            count: response.data.catalog.count,
            data: response.data.catalog.products
          };
        }));
  }

  getCategories(): Observable<ICatalogCategory[]> {
    const query = "query { categories { id name shortDesc longDesc }}";
    return this.service.post(this.catalogUrl, {'query': query}).pipe<ICatalogCategory[]>(
      map((response: any) => {
        return response.data.categories;
      }));
  }
}

const mockCategories: ICatalogCategory[] = [
  { id: 1, name: 'Accesorios', shortDesc: '', longDesc: ''},
  { id: 2, name: 'Electrónica', shortDesc: '', longDesc: ''},
  { id: 3, name: 'Libros', shortDesc: '', longDesc: ''},
  { id: 4, name: 'Juegos', shortDesc: '', longDesc: ''},
  { id: 5, name: 'Jardín', shortDesc: '', longDesc: ''},
  { id: 6, name: 'Ropa', shortDesc: '', longDesc: ''},
];

const mockCatalog: ICatalog = {
  pageIndex: 1,
  pageSize: 12,
  count: 40,
  data: [
    {
      id: 1,
      name: 'Conjuntos de Muebles de Jardín Exterior en Ratán 4 Piezas',
      shortDesc:
        'Juego de Muebles de Jardín para 4 Personas. Incluido 1 Sofá, 2 Sillones, 1 Mesa.',
      longDesc: '',
      priceValue: 652.23,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 5, name: 'Jardín', shortDesc: '', longDesc: ''}],
      slob: 'Jardín',
      visible: true,
    },
    {
      id: 2,
      name: 'Reloj inteligente',
      shortDesc: 'Reloj inteligente con pantalla táctil y GPS integrado',
      longDesc: '',
      priceValue: 250,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 2, name: 'Electrónica', shortDesc: '', longDesc: ''}],
      slob: 'Electrónica',
      visible: true,
    },
    {
      id: 3,
      name: 'Libro de cocina',
      shortDesc: 'Libro de cocina con recetas internacionales',
      longDesc: '',
      priceValue: 30,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 3, name: 'Libros', shortDesc: '', longDesc: ''}],
      slob: 'Libros',
      visible: true,
    },
    {
      id: 4,
      name: 'Mochila para portátil',
      shortDesc:
        'Mochila con compartimento para portátil de hasta 15 pulgadas',
        longDesc: '',
      priceValue: 50,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 1, name: 'Accesorios', shortDesc: '', longDesc: ''}],
      slob: 'Accesorios',
      visible: true,
    },
    {
      id: 5,
      name: 'Gafas de sol',
      shortDesc: 'Gafas de sol polarizadas con montura de metal',
      longDesc: '',
      priceValue: 80,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 1, name: 'Accesorios', shortDesc: '', longDesc: ''}],
      slob: 'Accesorios',
      visible: true,
    },
    {
      id: 6,
      name: 'Juego de mesa',
      shortDesc: 'Juego de mesa para 4 jugadores con temática de estrategia',
      longDesc: '',
      priceValue: 40,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 4, name: 'Juegos', shortDesc: '', longDesc: ''}],
      slob: 'Juegos',
      visible: true,
    },
    {
      id: 7,
      name: 'Camiseta de algodón',
      shortDesc: 'Camiseta cómoda y fresca para usar en cualquier ocasión',
      longDesc: '',
      priceValue: 19.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 6, name: 'Ropa', shortDesc: '', longDesc: ''}],
      slob: 'Ropa',
      visible: true,
    },
    {
      id: 8,
      name: 'Laptop HP',
      shortDesc:
        'Laptop con procesador Intel Core i7 y pantalla de 15 pulgadas',
        longDesc: '',
      priceValue: 1200.0,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 2, name: 'Electrónica', shortDesc: '', longDesc: ''}],
      slob: 'Electrónica',
      visible: true,
    },
    {
      id: 9,
      name: 'Camiseta roja',
      shortDesc: 'Una camiseta roja de algodón',
      longDesc: '',
      priceValue: 19.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 6, name: 'Ropa', shortDesc: '', longDesc: ''}],
      slob: 'Ropa',
      visible: true,
    },
    {
      id: 10,
      name: 'Pantalones vaqueros azules',
      shortDesc: 'Unos pantalones vaqueros azules de corte recto',
      longDesc: '',
      priceValue: 39.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 6, name: 'Ropa', shortDesc: '', longDesc: ''}],
      slob: 'Ropa',
      visible: true,
    },
    {
      id: 11,
      name: 'Zapatos deportivos negros',
      shortDesc: 'Zapatos deportivos negros de alta calidad',
      longDesc: '',
      priceValue: 79.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 6, name: 'Ropa', shortDesc: '', longDesc: ''}],
      slob: 'Ropa',
      visible: true,
    },
    {
      id: 12,
      name: 'Chaqueta de cuero marrón',
      shortDesc: 'Una chaqueta de cuero marrón de estilo vintage',
      longDesc: '',
      priceValue: 149.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 6, name: 'Ropa', shortDesc: '', longDesc: ''}],
      slob: 'Ropa',
      visible: true,
    },
    {
      id: 13,
      name: 'Sombrero de lana gris',
      shortDesc: 'Un sombrero de lana gris de estilo clásico',
      longDesc: '',
      priceValue: 29.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 1, name: 'Accesorios', shortDesc: '', longDesc: ''}],
      slob: 'Accesorios',
      visible: true,
    },
    {
      id: 14,
      name: 'Vestido de flores',
      shortDesc: 'Un vestido de flores con diseño elegante',
      longDesc: '',
      priceValue: 89.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 6, name: 'Ropa', shortDesc: '', longDesc: ''}],
      slob: 'Ropa',
      visible: true,
    },
    {
      id: 15,
      name: 'Bolso de cuero negro',
      shortDesc: 'Un bolso de cuero negro con diseño clásico',
      longDesc: '',
      priceValue: 69.99,
      priceCurrency: 'USD',
      smallImageUrl: 'https://picsum.photos/200',
      largeImageUrl: 'https://picsum.photos/200',
      categories: [{ id: 1, name: 'Accesorios', shortDesc: '', longDesc: ''}],
      slob: 'Accesorios',
      visible: true,
    },
  ],
};
