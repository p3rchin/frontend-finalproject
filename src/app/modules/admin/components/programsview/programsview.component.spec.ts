import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsviewComponent } from './programsview.component';

describe('ProgramsviewComponent', () => {
  let component: ProgramsviewComponent;
  let fixture: ComponentFixture<ProgramsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
