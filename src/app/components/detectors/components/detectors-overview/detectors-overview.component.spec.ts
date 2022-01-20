import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectorsOverviewComponent } from './detectors-overview.component';

describe('DetectorsOverviewComponent', () => {
  let component: DetectorsOverviewComponent;
  let fixture: ComponentFixture<DetectorsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectorsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectorsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
