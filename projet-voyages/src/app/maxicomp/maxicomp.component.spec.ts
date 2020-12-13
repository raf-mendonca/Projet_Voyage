import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxicompComponent } from './maxicomp.component';

describe('MaxicompComponent', () => {
  let component: MaxicompComponent;
  let fixture: ComponentFixture<MaxicompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxicompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
