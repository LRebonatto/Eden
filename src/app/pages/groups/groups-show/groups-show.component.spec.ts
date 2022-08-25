import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsShowComponent } from './groups-show.component';

describe('GroupsShowComponent', () => {
  let component: GroupsShowComponent;
  let fixture: ComponentFixture<GroupsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
