import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericConfirmModalComponent } from './generic-confirm-modal.component';

describe('GenericConfirmModalComponent', () => {
  let component: GenericConfirmModalComponent;
  let fixture: ComponentFixture<GenericConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
