import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as CircuitBreaker from 'circuit-breaker-js';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private circuitBreaker: CircuitBreaker;
  private readonly RETRY_TIMES = 3;

  constructor(private http: HttpClient) {
    this.circuitBreaker = new CircuitBreaker({
      windowDuration: 10000, // 10 seconds
      numBuckets: 10,
      timeoutDuration: 5000, // 5 seconds
      errorThreshold: 50,
      volumeThreshold: 10
    });
  }

  private setHeaders(options?: { headers?: HttpHeaders }): { headers?: HttpHeaders } {
    options = options || {};
    options.headers = options.headers || new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return options;
  }

  public get<T>(url: string, options?: { headers?: HttpHeaders }): Observable<T> {
    options = this.setHeaders(options);
    return new Observable<T>((observer) => {
      this.circuitBreaker.run(async () => {
        try {
          this.http.get<T>(url, options).subscribe(x => observer.next(x));
        } catch (error) {
          console.log(error);
          observer.error(error);
        }
      });
    }).pipe(retry(this.RETRY_TIMES));
  }

  public post<T>(url: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    options = this.setHeaders(options);
    return new Observable<T>((observer) => {
      this.circuitBreaker.run(async () => {
        try {
          this.http.post<T>(url, body, options).subscribe(x => observer.next(x));
        } catch (error) {
          console.log(error);
          observer.error(error);
        }
      });
    }).pipe(retry(this.RETRY_TIMES));
  }

  // public put<T>(url: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
  //   options = this.setHeaders(options);
  //   return this.circuitBreaker.fire(() =>
  //     this.http.put<T>(url, body, options).pipe(
  //       retry(3), // Retry up to 3 times on error
  //       catchError((error) => {
  //         this.circuitBreaker.record();
  //         return throwError(error);
  //       })
  //     )
  //   );
  // }

  // public delete<T>(url: string, options?: { headers?: HttpHeaders }): Observable<T> {
  //   options = this.setHeaders(options);
  //   return this.circuitBreaker.fire(() =>
  //     this.http.delete<T>(url, options).pipe(
  //       retry(3), // Retry up to 3 times on error
  //       catchError((error) => {
  //         this.circuitBreaker.record();
  //         return throwError(error);
  //       })
  //     )
  //   );
  // }
}
