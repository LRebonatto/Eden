import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioGeralUnidadeComponent } from './relatorio-geral-unidade.component';

describe('RelatorioGeralUnidadeComponent', () => {
  let component: RelatorioGeralUnidadeComponent;
  let fixture: ComponentFixture<RelatorioGeralUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioGeralUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioGeralUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
