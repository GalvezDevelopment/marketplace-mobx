import {Observable} from 'rxjs';
import {ApiBaseResponse} from "./api-base-response";

export interface ApiCallHandlerOptions {
  append?: string;
  endpoint?: string;

}

/**
 * Interface to only request data from an API.
 */
export interface ApiCallRequestHandler {
  get(url: string, options?: ApiCallHandlerOptions): Observable<unknown>;
}

/**
 * Interface to use when all HTTP methods are required.
 */
export interface ApiCallHandler<TEntity> extends ApiCallRequestHandler {
  post(url: string, body: unknown, options?: ApiCallHandlerOptions): Observable<ApiBaseResponse>;

  put(url: string, body: unknown, options?: ApiCallHandlerOptions): Observable<ApiBaseResponse>;

  delete(url: string, options?: ApiCallHandlerOptions): Observable<ApiBaseResponse>;
}
