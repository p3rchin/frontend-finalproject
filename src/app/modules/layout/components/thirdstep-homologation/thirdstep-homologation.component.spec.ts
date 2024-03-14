import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdstepHomologationComponent } from './thirdstep-homologation.component';

describe('ThirdstepHomologationComponent', () => {
  let component: ThirdstepHomologationComponent;
  let fixture: ComponentFixture<ThirdstepHomologationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdstepHomologationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdstepHomologationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
