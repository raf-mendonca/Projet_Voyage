import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicompComponent } from './minicomp.component';

describe('MinicompComponent', () => {
  let component: MinicompComponent;
  let fixture: ComponentFixture<MinicompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
