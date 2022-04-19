import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpreviewComponent } from './chartpreview.component';

describe('ChartpreviewComponent', () => {
  let component: ChartpreviewComponent;
  let fixture: ComponentFixture<ChartpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartpreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
