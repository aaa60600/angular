import { Component, OnInit } from '@angular/core';
import { Dvditem } from '../dvditem';
import {DvditemService} from '../dvditem.service'
import { Observable, Subject } from 'rxjs';
// import {
//   debounceTime, distinctUntilChanged, switchMap
// } from 'rxjs/operators';

@Component({
  selector: 'app-dvditem',
  templateUrl: './dvditem.component.html',
  styleUrls: ['./dvditem.component.css']
})
export class DvditemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'date', 'genre', 'dsc'];
  dvditems$: Observable<any>;
  dvditem$: Observable<Dvditem>;
  constructor(
    private dvditemService:DvditemService,
  ) { }


  ngOnInit() {}

  getDvditems(): void {
    this.dvditems$ =this.dvditemService.getDvditems();
    
  }

  createDvditem(title:string,date:string,genre:string,dsc:string):void{
    title = title.trim();
    date = date.trim();
    genre = genre.trim();
    dsc = dsc.trim();
    if (!title || !date || !genre|| !dsc) { return; }
    this.dvditemService.createDvditem({ title,date,genre,dsc } as Dvditem)
    .subscribe();
    this.getDvditems();
  }

  updateDvditem(number:string,title:string,date:string,genre:string,dsc:string):void{
    number= number.trim();
    title = title.trim();
    date = date.trim();
    genre = genre.trim();
    dsc = dsc.trim();
    if (!number || !title || !date || !genre|| !dsc) { return; }
    const item={
      id:Number(number),
      title,
      date,
      genre,
      dsc
  }
    this.dvditemService.updateDvditem(item)
    .subscribe(()=> this.getDvditems());
  }

  delete(number:String): void {
    this.dvditemService.deleteDvditem(number).subscribe();
    this.getDvditems();
  }
  save(): void {
    this.dvditemService.getDvditems();
  }

}
