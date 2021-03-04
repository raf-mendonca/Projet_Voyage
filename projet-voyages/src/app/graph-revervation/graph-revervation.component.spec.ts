import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphRevervationComponent } from './graph-revervation.component';

describe('GraphRevervationComponent', () => {
  let component: GraphRevervationComponent;
  let fixture: ComponentFixture<GraphRevervationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphRevervationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphRevervationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
