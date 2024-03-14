import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHomologationComponent } from './create-homologation.component';

describe('CreateHomologationComponent', () => {
  let component: CreateHomologationComponent;
  let fixture: ComponentFixture<CreateHomologationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHomologationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHomologationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
