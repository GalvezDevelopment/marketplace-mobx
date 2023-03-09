import { Component } from '@angular/core';
import {BasketStore} from "../../state/basket.store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(protected readonly basketStore: BasketStore) {
  }
}
