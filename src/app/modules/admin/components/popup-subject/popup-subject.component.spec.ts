import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSubjectComponent } from './popup-subject.component';

describe('PopupSubjectComponent', () => {
  let component: PopupSubjectComponent;
  let fixture: ComponentFixture<PopupSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
