import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dvditem } from './dvditem';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dvditems = [
      { id: 11, title: 'Hydrogen', date: '2020-08-03T16:00:00.000Z', genre: 'H', dsc: 'test' },
      { id: 12, title: 'Helium', date: '2020-08-03T16:00:00.000Z', genre: 'He', dsc: 'test' },
      { id: 13, title: 'Lithium', date: '2020-08-03T16:00:00.000Z', genre: 'Li', dsc: 'test' },
      { id: 14, title: 'Beryllium', date: '2020-08-03T16:00:00.000Z', genre: 'Be', dsc: 'test' },
      { id: 15, title: 'Boron', date: '2020-08-03T16:00:00.000Z', genre: 'B', dsc: 'test' },
      { id: 16, title: 'Carbon', date: '2020-08-03T16:00:00.000Z', genre: 'C', dsc: 'test' },
      { id: 17, title: 'Nitrogen', date: '2020-08-03T16:00:00.000Z', genre: 'N', dsc: 'test' },
      { id: 18, title: 'Oxygen', date: '2020-08-03T16:00:00.000Z', genre: 'O', dsc: 'test' },
      { id: 19, title: 'Fluorine', date: '2020-08-03T16:00:00.000Z', genre: 'F', dsc: 'test' },
      { id: 20, title: 'Neon', date: '2020-08-03T16:00:00.000Z', genre: 'Ne', dsc: 'test' },
    ];
    return {dvditems};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(dvditems: Dvditem[]): number {
    return dvditems.length > 0 ? Math.max(...dvditems.map(hero => hero.id)) + 1 : 11;
  }
}