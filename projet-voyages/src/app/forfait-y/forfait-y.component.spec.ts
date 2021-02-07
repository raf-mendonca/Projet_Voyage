import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitYComponent } from './forfait-y.component';

describe('ForfaitYComponent', () => {
  let component: ForfaitYComponent;
  let fixture: ComponentFixture<ForfaitYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
