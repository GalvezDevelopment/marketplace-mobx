import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {ProductApiService} from "./services/product-api/product-api.service";
import {MobxAngularModule} from "mobx-angular";



@NgModule({
  declarations: [
    HomeComponent
  ],
  providers: [ProductApiService],
  imports: [
    CommonModule,
    MobxAngularModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
