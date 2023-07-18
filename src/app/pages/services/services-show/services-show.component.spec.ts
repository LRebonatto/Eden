import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesShowComponent } from './services-show.component';

describe('ServicesShowComponent', () => {
  let component: ServicesShowComponent;
  let fixture: ComponentFixture<ServicesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
