import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitXComponent } from './forfait-x.component';

describe('ForfaitXComponent', () => {
  let component: ForfaitXComponent;
  let fixture: ComponentFixture<ForfaitXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
