import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsShowComponent } from './tickets-show.component';

describe('TicketsShowComponent', () => {
  let component: TicketsShowComponent;
  let fixture: ComponentFixture<TicketsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
