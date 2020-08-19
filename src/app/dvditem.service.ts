import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Dvditem} from './dvditem'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class DvditemService {
  private dvditemsUrl = 'api/dvditems';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getDvditems(): Observable<Dvditem[]> {
    return this.http.get<Dvditem[]>(this.dvditemsUrl)
    .pipe(
      tap(_ => this.log('fetched dvditems')),
      catchError(this.handleError<Dvditem[]>('getDvditems', [])),
    );
  
  }

  createDvditem(dvditem:Dvditem):Observable<Dvditem>{
    return this.http.post<Dvditem>(this.dvditemsUrl, dvditem, this.httpOptions).pipe(
      tap((newHero: Dvditem) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Dvditem>('addHero'))
    );
  }
  updateDvditem(dvditem: any): Observable<any> {
    return this.http.put(this.dvditemsUrl, dvditem, this.httpOptions).pipe(
      tap(_ => this.log(`updated dvditem id=${dvditem.id}`)),
      catchError(this.handleError<any>('updateDvditem'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  deleteDvditem(number: String | number): Observable<Dvditem> {
    const url = `${this.dvditemsUrl}/${number}`;
    return this.http.delete<Dvditem>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${number}`)),
      catchError(this.handleError<Dvditem>('deleteHero'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
      console.log(message);
  }
}


