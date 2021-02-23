import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewVoyageForfaitComponent } from './dialog-new-voyage-forfait.component';

describe('DialogNewVoyageForfaitComponent', () => {
  let component: DialogNewVoyageForfaitComponent;
  let fixture: ComponentFixture<DialogNewVoyageForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewVoyageForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewVoyageForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
