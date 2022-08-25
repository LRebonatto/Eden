import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIntegrationUsersComponent } from './modal-integration-users.component';

describe('ModalIntegrationUsersComponent', () => {
  let component: ModalIntegrationUsersComponent;
  let fixture: ComponentFixture<ModalIntegrationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIntegrationUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIntegrationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
