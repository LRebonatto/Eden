import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericConfirmModalWithMessageComponent } from './generic-confirm-modal-with-message.component';

describe('GenericConfirmModalWithMessageComponent', () => {
  let component: GenericConfirmModalWithMessageComponent;
  let fixture: ComponentFixture<GenericConfirmModalWithMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericConfirmModalWithMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericConfirmModalWithMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
