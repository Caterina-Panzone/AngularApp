import { Injectable } from '@angular/core';
import { ICatalog } from '../shared/models/catalog.model';
import { Observable, of } from 'rxjs';
import { ICatalogCategory } from '../shared/models/catalogCategory.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private catalogUrl: string = '';
  private categoriesUrl: string = '';

  constructor() {
    this.catalogUrl = '';
    this.categoriesUrl = '';
  }

  getCatalog(
    pageIndex: number,
    pageSize: number,
    category: number
  ): Observable<ICatalog> {
    let url = this.catalogUrl;

    if (category) {
      url = this.catalogUrl + '/category/' + category.toString();
    }

    url = url + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize;

    // to-do. Service should be in Shared folder.
    // this.service.get(url).pipe<ICatalog>(
    //   tap((response: any) => {
    //     return response;
    //   })
    // );
    mockCatalog.pageIndex = pageIndex;
    return of(mockCatalog);
  }

  getCategories(): Observable<ICatalogCategory[]> {
    return of(mockCategories);
  }
}

const mockCategories: ICatalogCategory[] = [
  { id: 1, category: 'Accesorios' },
  { id: 2, category: 'Electrónica' },
  { id: 3, category: 'Libros' },
  { id: 4, category: 'Juegos' },
  { id: 5, category: 'Jardín' },
  { id: 6, category: 'Ropa' },
];

const mockCatalog: ICatalog = {
  pageIndex: 1,
  pageSize: 12,
  count: 40,
  data: [
    {
      id: 1,
      name: 'Conjuntos de Muebles de Jardín Exterior en Ratán 4 Piezas',
      description:
        'Juego de Muebles de Jardín para 4 Personas. Incluido 1 Sofá, 2 Sillones, 1 Mesa.',
      price: 652.23,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 5,
      catalogCategory: 'Jardín',
      units: 20,
    },
    {
      id: 2,
      name: 'Reloj inteligente',
      description: 'Reloj inteligente con pantalla táctil y GPS integrado',
      price: 250,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 2,
      catalogCategory: 'Electrónica',
      units: 20,
    },
    {
      id: 3,
      name: 'Libro de cocina',
      description: 'Libro de cocina con recetas internacionales',
      price: 30,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 3,
      catalogCategory: 'Libros',
      units: 15,
    },
    {
      id: 4,
      name: 'Mochila para portátil',
      description:
        'Mochila con compartimento para portátil de hasta 15 pulgadas',
      price: 50,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 1,
      catalogCategory: 'Accesorios',
      units: 5,
    },
    {
      id: 5,
      name: 'Gafas de sol',
      description: 'Gafas de sol polarizadas con montura de metal',
      price: 80,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 1,
      catalogCategory: 'Accesorios',
      units: 12,
    },
    {
      id: 6,
      name: 'Juego de mesa',
      description: 'Juego de mesa para 4 jugadores con temática de estrategia',
      price: 40,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 4,
      catalogCategory: 'Juegos',
      units: 8,
    },
    {
      id: 7,
      name: 'Camiseta de algodón',
      description: 'Camiseta cómoda y fresca para usar en cualquier ocasión',
      price: 19.99,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 6,
      catalogCategory: 'Ropa',
      units: 100,
    },
    {
      id: 8,
      name: 'Laptop HP',
      description:
        'Laptop con procesador Intel Core i7 y pantalla de 15 pulgadas',
      price: 1200.0,
      pictureUri: 'https://picsum.photos/200',
      catalogCategoryId: 2,
      catalogCategory: 'Electrónica',
      units: 10,
    },
    {
      id: 9,
      name: 'Camiseta roja',
      description: 'Una camiseta roja de algodón',
      price: 19.99,
      pictureUri:
        'https://dummyimage.com/600x400/ff0000/ffffff&text=Camiseta+roja',
      catalogCategoryId: 6,
      catalogCategory: 'Ropa',
      units: 10,
    },
    {
      id: 10,
      name: 'Pantalones vaqueros azules',
      description: 'Unos pantalones vaqueros azules de corte recto',
      price: 39.99,
      pictureUri:
        'https://dummyimage.com/600x400/0000ff/ffffff&text=Pantalones+vaqueros+azules',
      catalogCategoryId: 6,
      catalogCategory: 'Ropa',
      units: 5,
    },
    {
      id: 11,
      name: 'Zapatos deportivos negros',
      description: 'Zapatos deportivos negros de alta calidad',
      price: 79.99,
      pictureUri:
        'https://dummyimage.com/600x400/000000/ffffff&text=Zapatos+deportivos+negros',
      catalogCategoryId: 6,
      catalogCategory: 'Ropa',
      units: 15,
    },
    {
      id: 12,
      name: 'Chaqueta de cuero marrón',
      description: 'Una chaqueta de cuero marrón de estilo vintage',
      price: 149.99,
      pictureUri:
        'https://dummyimage.com/600x400/8B4513/ffffff&text=Chaqueta+de+cuero+marrón',
      catalogCategoryId: 6,
      catalogCategory: 'Ropa',
      units: 3,
    },
    {
      id: 13,
      name: 'Sombrero de lana gris',
      description: 'Un sombrero de lana gris de estilo clásico',
      price: 29.99,
      pictureUri:
        'https://dummyimage.com/600x400/808080/ffffff&text=Sombrero+de+lana+gris',
      catalogCategoryId: 1,
      catalogCategory: 'Accesorios',
      units: 8,
    },
    {
      id: 14,
      name: 'Vestido de flores',
      description: 'Un vestido de flores con diseño elegante',
      price: 89.99,
      pictureUri:
        'https://dummyimage.com/600x400/ff69b4/ffffff&text=Vestido+de+flores',
      catalogCategoryId: 6,
      catalogCategory: 'Ropa',
      units: 12,
    },
    {
      id: 15,
      name: 'Bolso de cuero negro',
      description: 'Un bolso de cuero negro con diseño clásico',
      price: 69.99,
      pictureUri:
        'https://dummyimage.com/600x400/000000/ffffff&text=Bolso+de+cuero+negro',
      catalogCategoryId: 1,
      catalogCategory: 'Accesorios',
      units: 6,
    },
  ],
};
