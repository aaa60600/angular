
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dvditem } from './dvditem';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  //Data = ELEMENT_DATA;
  // dvditem: Dvditem;
  // navStart = new Observable(subscriber => {
  //   subscriber.next(this.Data);
  //   subscriber.complete();
  // });

  // json: string;
  // constructor(
  // ) { }


  // Post(url: string, data, options: {
  //   headers?: HttpHeaders | {
  //     [header: string]: string | string[];
  //   };

  // }): Observable<Dvditem[] | any> {
  //   this.json = data;
  //   let urlarr: string[] = url.split('/');
  //   switch (urlarr[urlarr.length - 1]) {
  //     case 'create':
  //       this.dvditem = JSON.parse(data);
  //       this.dvditem.id = ELEMENT_DATA.length + 1;
  //       this.Data.push(this.dvditem);
  //       return of(this.Data);
  //     case 'update':
  //       this.dvditem = JSON.parse(data);
  //       this.Data[this.dvditem.id - 1] = this.dvditem;
  //       return of(this.Data);
  //     case 'delete':
  //       this.dvditem = JSON.parse(data);
  //       this.Data = this.Data.filter(value => {
  //         return value.id !== this.dvditem.id;
  //       });
  //       return of(this.Data);
  //     default:
  //       this.json = 'API錯誤';
  //       return of('API錯誤');
  //   }

  // }

  // Get(url: string, data?: any | null): Observable<Dvditem[] | any> {
  //   this.json = null;
  //   return of(this.Data);
  // }
}
