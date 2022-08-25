import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioGeralGrandezasComponent } from './relatorio-geral-grandezas.component';

describe('RelatorioGeralGrandezasComponent', () => {
  let component: RelatorioGeralGrandezasComponent;
  let fixture: ComponentFixture<RelatorioGeralGrandezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioGeralGrandezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioGeralGrandezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
