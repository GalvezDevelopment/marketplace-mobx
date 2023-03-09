import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductStore} from "../../core/state/product.store";
import {BasketStore} from "../../core/state/basket.store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(protected readonly store: ProductStore, private readonly basketStore: BasketStore) {
  }

  ngOnInit(): void {
    this.store.getAllProducts();
  }

  addInBasket(id: number): void {
    this.basketStore.addProductById(id);
  }
}
