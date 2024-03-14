import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardviewHomologationComponent } from './cardview-homologation.component';

describe('CardviewHomologationComponent', () => {
  let component: CardviewHomologationComponent;
  let fixture: ComponentFixture<CardviewHomologationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardviewHomologationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardviewHomologationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
