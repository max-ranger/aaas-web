import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDetectorComponent } from './interval-detector.component';

describe('IntervalDetectorComponent', () => {
  let component: IntervalDetectorComponent;
  let fixture: ComponentFixture<IntervalDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalDetectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
