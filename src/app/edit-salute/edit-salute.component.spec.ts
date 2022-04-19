import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSaluteComponent } from './edit-salute.component';

describe('EditSaluteComponent', () => {
  let component: EditSaluteComponent;
  let fixture: ComponentFixture<EditSaluteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSaluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSaluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
