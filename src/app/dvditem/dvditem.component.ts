import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Dvditem } from '../dvditem';
import {DvditemService} from '../dvditem.service'
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-dvditem',
  templateUrl: './dvditem.component.html',
  styleUrls: ['./dvditem.component.css'],
  providers: [DatePipe]
})
export class DvditemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'date', 'genre', 'dsc'];
  dvditems$: Observable<any>;
  dvditem$: Observable<Dvditem>;
  selectedDvditem:Dvditem;
  json:string;
  @Input() getDataFromChild;
  constructor(
    private dvditemService:DvditemService,
    private datePipe : DatePipe
  ) { }


  ngOnInit() {
    this.getDvditems();
    this.initDvditem();
  }

  initDvditem():void{
    const item={
      id:null,
      title:"",
      date:"",
      genre:"",
      dsc:""
  }
    this.selectedDvditem=item;

  }
  getDvditems(): void {
  //   this.dvditemService.getDvditems().subscribe(els => {
  //     this.dvditems= els as Dvditem[]
  // });
  this.dvditems$=this.dvditemService.getDvditems();
    
    
  }

  createDvditem(title:string,date:string,genre:string,dsc:string):void{
   
    date =this.datePipe.transform(date, 'MM-dd-yyyy');
    title = title.trim();
    date = date.trim();
    genre = genre.trim();
    dsc = dsc.trim();
    if (!title || !date || !genre|| !dsc) { return; }
    this.dvditemService.createDvditem({ title,date,genre,dsc } as Dvditem)
    .subscribe();
    const info={
      id:null,
      title,
      date,
      genre,
      dsc
  } 
    this.json=JSON.stringify(info);
    this.getDvditems();
    this.initDvditem();
  }

  updateDvditem(title:string,date:string,genre:string,dsc:string):void{
    title = title.trim();
    date = date.trim();
    genre = genre.trim();
    dsc = dsc.trim();
    if ( !title || !date || !genre|| !dsc) { return; }
    const info={
      id:this.selectedDvditem.id,
      title,
      date,
      genre,
      dsc
  }
    this.dvditemService.updateDvditem(info)
    .subscribe(()=> this.getDvditems());
    this.json=JSON.stringify(info);
    this.initDvditem();
  }

  delete(number:Number): void {
    this.dvditemService.deleteDvditem(number.toString()).subscribe();
    const info={id:number}
    this.json=JSON.stringify(info);
    this.getDvditems();
    this.initDvditem();
  }
  onSelect(dvditem: Dvditem): void {
    this.selectedDvditem= Object.assign({}, dvditem);
    const date = this.selectedDvditem.date.split("T",1)[0];
    this.selectedDvditem.date=date;
  }
}
