import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomologationsviewComponent } from './homologationsview.component';

describe('HomologationsviewComponent', () => {
  let component: HomologationsviewComponent;
  let fixture: ComponentFixture<HomologationsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomologationsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomologationsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
