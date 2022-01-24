import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinManxDetectorComponent } from './min-manx-detector.component';

describe('MinManxDetectorComponent', () => {
  let component: MinManxDetectorComponent;
  let fixture: ComponentFixture<MinManxDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinManxDetectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinManxDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
