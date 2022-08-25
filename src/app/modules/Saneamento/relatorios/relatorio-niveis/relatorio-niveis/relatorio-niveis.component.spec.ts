import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioNiveisComponent } from './relatorio-niveis.component';

describe('RelatorioNiveisComponent', () => {
  let component: RelatorioNiveisComponent;
  let fixture: ComponentFixture<RelatorioNiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioNiveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioNiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
