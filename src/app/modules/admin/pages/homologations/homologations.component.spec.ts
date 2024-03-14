import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomologationsComponent } from './homologations.component';

describe('HomologationsComponent', () => {
  let component: HomologationsComponent;
  let fixture: ComponentFixture<HomologationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomologationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomologationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
