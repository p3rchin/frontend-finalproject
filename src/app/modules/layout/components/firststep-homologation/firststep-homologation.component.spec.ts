import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirststepHomologationComponent } from './firststep-homologation.component';

describe('FirststepHomologationComponent', () => {
  let component: FirststepHomologationComponent;
  let fixture: ComponentFixture<FirststepHomologationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirststepHomologationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirststepHomologationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
