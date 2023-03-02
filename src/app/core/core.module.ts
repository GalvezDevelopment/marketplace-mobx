import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderService} from "./services/loader/loader.service";
import { HeaderComponent } from './components/header/header.component';
import { FullLoaderComponent } from './components/full-loader/full-loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FullLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [LoaderService],
  exports: [
    HeaderComponent,
    FullLoaderComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [LoaderService]
    };
  }
}
