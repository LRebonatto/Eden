import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioNivelLocalidadesComponent } from './relatorio-nivel-localidades.component';

describe('RelatorioNivelLocalidadesComponent', () => {
  let component: RelatorioNivelLocalidadesComponent;
  let fixture: ComponentFixture<RelatorioNivelLocalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioNivelLocalidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioNivelLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
