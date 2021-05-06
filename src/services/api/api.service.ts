import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment as ENV } from '../../environments/environment';

@Injectable()
export default class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  fetch(): Observable<any> {
    return this.http.get(`${ENV.API_BASE_URL}/accounts?ccy=SEK`)
      .pipe(
        take(1),
      );
  }
}