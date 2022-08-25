import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationBranchesComponent } from './integration-branches.component';

describe('IntegrationBranchesComponent', () => {
  let component: IntegrationBranchesComponent;
  let fixture: ComponentFixture<IntegrationBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationBranchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
