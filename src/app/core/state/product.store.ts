import {Injectable} from '@angular/core';
import {makeObservable} from 'mobx';
import {action, observable, computed} from 'mobx-angular';
import {Product} from "../models/index";
import {ProductApiService} from "../../features/home/services/product-api/product-api.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  products: Product[];

  get total(): number {
    return this.products.length;
  }

  constructor(private readonly productsService: ProductApiService) {
    this.products = [];
    makeObservable(this, {
      products: observable,
      fillProducts: action,
      total: computed
    })
  }

  fillProducts(products: Product[]): void {
    this.products = products;
  }

  getAllProducts(): void {
    this.productsService.getAll()
      .pipe(map(response => response.products)).subscribe(this.fillProducts.bind(this));
  }
}
