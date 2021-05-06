import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Injectable()
export default class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  fetch(): Observable<any> {
    return this.http.get('https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK')
      .pipe(
        take(1),
        catchError((error) => {
          throw error;
        }),
      );
  }
}