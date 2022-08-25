import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccessDeniedComponent } from './page-access-denied.component';

describe('PageAccessDeniedComponent', () => {
  let component: PageAccessDeniedComponent;
  let fixture: ComponentFixture<PageAccessDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccessDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
