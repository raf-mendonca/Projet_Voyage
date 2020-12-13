import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVoyagesComponent } from './liste-voyages.component';

describe('ListeVoyagesComponent', () => {
  let component: ListeVoyagesComponent;
  let fixture: ComponentFixture<ListeVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVoyagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
