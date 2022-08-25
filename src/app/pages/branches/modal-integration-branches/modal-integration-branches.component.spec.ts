import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIntegrationBranchesComponent } from './modal-integration-branches.component';

describe('ModalIntegrationBranchesComponent', () => {
  let component: ModalIntegrationBranchesComponent;
  let fixture: ComponentFixture<ModalIntegrationBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIntegrationBranchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIntegrationBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
