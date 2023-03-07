import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductStore} from "../../core/state/product.store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(protected readonly store: ProductStore) {
  }

  ngOnInit(): void {
    this.store.getAllProducts();
  }
}
