import {ApiBaseResponse} from "./api-base-response";

export interface ApiProductResponse<TEntity> extends ApiBaseResponse {
  products: TEntity[];
}
