import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SaluteComponent } from './salute.component';

describe('SaluteComponent', () => {
  let component: SaluteComponent;
  let fixture: ComponentFixture<SaluteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
