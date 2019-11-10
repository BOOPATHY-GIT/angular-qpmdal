import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  public getAllRecords () {
    return this.http.get(this.endpoint + 'records').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('Get Records'))
      // catchError ((error: HttpErrorResponse) => {
      //   console.error('Error while fetching records');
      //   console.error(error);
      //   return throwError(error);
      // })
    );
  }

  public  getARecord (id) {
    return this.http.get(this.endpoint + 'records/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('Get Record'))
      // catchError ((error: HttpErrorResponse) => {
      //   console.error('Error while fetching record: ' + id);
      //   console.error(error);
      //   return throwError(error);
      // })
    );
  }

  public addARecord (record) {
    return this.http.post<any>(this.endpoint + 'records/', JSON.stringify(record), this.httpOptions).pipe(
      tap((record) => {
        console.log(`Added record: ${JSON.stringify(record)}`)
      }),
      catchError(this.handleError<any>('Add Record'))
    )
  }

  public updateARecord (id, record) {
    return this.http.put<any>(this.endpoint + 'records/' + id, JSON.stringify(record), this.httpOptions).pipe(
      tap((record) => {
        console.log(`Updated record: ${JSON.stringify(record)}`)
      }),
      catchError(this.handleError<any>('Update Record'))
    )
  }

  public deleteARecord (id: string) {
    return this.http.delete<any>(this.endpoint + 'records/' + id, this.httpOptions).pipe(
      tap((record) => {
        console.log(`Deleted record: ${JSON.stringify(record)}`)
      }),
      catchError(this.handleError<any>('Delete Record'))
    )
  }

  private extractData (res: Response) {
    const body = res;
    return body || {};
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any) => {
      console.error(`${operation} failed. Error: ${error.message}`);
      return throwError(error);
    }
  }

}
