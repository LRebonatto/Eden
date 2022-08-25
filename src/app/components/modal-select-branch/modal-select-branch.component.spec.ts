import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectBranchComponent } from './modal-select-branch.component';

describe('ModalSelectBranchComponent', () => {
  let component: ModalSelectBranchComponent;
  let fixture: ComponentFixture<ModalSelectBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSelectBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
