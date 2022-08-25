import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPermissionsUserComponent } from './modal-permissions-user.component';

describe('ModalPermissionsUserComponent', () => {
  let component: ModalPermissionsUserComponent;
  let fixture: ComponentFixture<ModalPermissionsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPermissionsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPermissionsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
