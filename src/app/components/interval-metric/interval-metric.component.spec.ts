import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalMetricComponent } from './interval-metric.component';

describe('IntervalMetricComponent', () => {
  let component: IntervalMetricComponent;
  let fixture: ComponentFixture<IntervalMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalMetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
