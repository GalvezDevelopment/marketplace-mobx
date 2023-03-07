import {Injectable} from '@angular/core';
import {ApiCallHandlerService} from "../../../../core/services/api-call-handler/api-call-handler.service";
import {map, Observable} from "rxjs";
import {ApiProductResponse, Product} from "../../../../core/models/index";

@Injectable()
export class ProductApiService {

  constructor(private readonly apiHandler: ApiCallHandlerService) {
  }

  getAll(): Observable<ApiProductResponse<Product>> {
    return this.apiHandler.get('https://dummyjson.com/products').pipe(map((response: unknown) => {
      const responseGuard = response as { products: unknown[] };
      if (response && typeof responseGuard.products) {
        return {
          products: responseGuard.products
            .map(item => item as Product)
            .map(product => {
              return {
                title: product.title,
                id: product.id,
                description: product.description,
                price: product.price,
                stock: product.stock,
                images: product.images
              };
            }), success: true
        };
      }
      return {products: [], success: true};
    }));
  }
}
