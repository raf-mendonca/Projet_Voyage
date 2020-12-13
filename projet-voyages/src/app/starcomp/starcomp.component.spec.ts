import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcompComponent } from './starcomp.component';

describe('StarcompComponent', () => {
  let component: StarcompComponent;
  let fixture: ComponentFixture<StarcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
