import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockLoaderComponent } from './components/block-loader/block-loader.component';



@NgModule({
  declarations: [
    BlockLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockLoaderComponent
  ]
})
export class SharedModule { }
