import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockLoaderComponent } from './components/block-loader/block-loader.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    BlockLoaderComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockLoaderComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
