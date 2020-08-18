import { Component, OnInit } from '@angular/core';
import { Dvditem, ELEMENT_DATA } from '../dvditem';


@Component({
  selector: 'app-dvditem',
  templateUrl: './dvditem.component.html',
  styleUrls: ['./dvditem.component.css']
})
export class DvditemComponent implements OnInit {

  constructor(
  ) { }
  displayedColumns: string[] = ['id', 'title', 'date', 'genre', 'dsc'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
