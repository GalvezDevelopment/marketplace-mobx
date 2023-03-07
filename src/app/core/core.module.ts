import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {LoaderService} from "./services/loader/loader.service";
import {HeaderComponent} from './components/header/header.component';
import {FullLoaderComponent} from './components/full-loader/full-loader.component';
import {ApiCallHandlerService} from "./services/api-call-handler/api-call-handler.service";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    FullLoaderComponent
  ],
  imports: [
    RouterModule
  ],
  providers: [ApiCallHandlerService, LoaderService],
  exports: [
    HttpClientModule,
    HeaderComponent,
    FullLoaderComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [ApiCallHandlerService, LoaderService]
    };
  }
}
