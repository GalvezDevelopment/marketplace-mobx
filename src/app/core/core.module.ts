import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderService} from "./services/loader/loader.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoaderService]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [LoaderService]
    };
  }
}
