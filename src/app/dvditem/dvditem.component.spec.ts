import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvditemComponent } from './dvditem.component';

describe('DvditemComponent', () => {
  let component: DvditemComponent;
  let fixture: ComponentFixture<DvditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
