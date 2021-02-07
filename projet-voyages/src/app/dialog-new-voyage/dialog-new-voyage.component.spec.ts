import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewVoyageComponent } from './dialog-new-voyage.component';

describe('DialogNewVoyageComponent', () => {
  let component: DialogNewVoyageComponent;
  let fixture: ComponentFixture<DialogNewVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
