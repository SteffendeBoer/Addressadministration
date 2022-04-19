import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartoptionComponent } from './chartoption.component';

describe('ChartoptionComponent', () => {
  let component: ChartoptionComponent;
  let fixture: ComponentFixture<ChartoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
