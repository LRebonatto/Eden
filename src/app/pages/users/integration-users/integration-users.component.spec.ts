import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationUsersComponent } from './integration-users.component';

describe('IntegrationUsersComponent', () => {
  let component: IntegrationUsersComponent;
  let fixture: ComponentFixture<IntegrationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
