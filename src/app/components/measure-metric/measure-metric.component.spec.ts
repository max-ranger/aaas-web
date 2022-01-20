import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureMetricComponent } from './measure-metric.component';

describe('MeasureMetricComponent', () => {
  let component: MeasureMetricComponent;
  let fixture: ComponentFixture<MeasureMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasureMetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
