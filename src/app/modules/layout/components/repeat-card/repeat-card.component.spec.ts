import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatCardComponent } from './repeat-card.component';

describe('RepeatCardComponent', () => {
  let component: RepeatCardComponent;
  let fixture: ComponentFixture<RepeatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
