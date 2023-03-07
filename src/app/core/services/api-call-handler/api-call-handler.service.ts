import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiCallHandlerOptions, ApiCallRequestHandler} from "../../models/api-call-handler";

@Injectable()
export class ApiCallHandlerService implements ApiCallRequestHandler {
  constructor(private readonly http: HttpClient) {
  }

  get(url: string, options?: ApiCallHandlerOptions): Observable<unknown> {
    return this.http.get<unknown>(`${url}`);
  }
}
