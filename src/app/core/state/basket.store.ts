import {Injectable} from '@angular/core';
import {makeObservable} from 'mobx';
import {action, observable, computed} from 'mobx-angular';
import {ProductStore} from "./product.store";
import {Product} from "../models";

export type ProductBasket = Product & { amount: number };

@Injectable({
  providedIn: 'root'
})
export class BasketStore {
  productsInBasket: Map<number, ProductBasket>;

  get basket(): Product[] {
    return Array.from(this.productsInBasket.values());
  }

  constructor(private readonly productStore: ProductStore) {
    this.productsInBasket = new Map();
    makeObservable(this, {
      productsInBasket: observable,
      basket: computed,
      addProductById: action,
      removeProductById: action,
      removeAll: action,
    });
  }

  addProductById(id: number): void {
    const product = this.productStore.products.find(p => p.id === id);
    if (!product) return;
    const basketProduct = this.productsInBasket.get(product.id);
    if (!basketProduct) {
      this.productsInBasket.set(product.id, {...product, amount: 1});
    } else if (product.stock > basketProduct.amount) {
      basketProduct.amount++;
    }
  }

  removeProductById(id: number): void {
    const product = this.productStore.products.find(p => p.id === id);
    if (!product) return;
    const basketProduct = this.productsInBasket.get(product.id);
    if (basketProduct) {
      basketProduct.amount--;
      if (basketProduct.amount === 0) {
        this.productsInBasket.delete(product.id);
      }
    }
  }

  removeAll(): void {
    this.productsInBasket = new Map();
  }
}
