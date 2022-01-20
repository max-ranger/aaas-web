import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterMetricComponent } from './counter-metric.component';

describe('CounterMetricComponent', () => {
  let component: CounterMetricComponent;
  let fixture: ComponentFixture<CounterMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterMetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
