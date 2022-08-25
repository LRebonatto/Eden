import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioVazaoHorimetroComponent } from './relatorio-vazao-horimetro.component';

describe('RelatorioVazaoHorimetroComponent', () => {
  let component: RelatorioVazaoHorimetroComponent;
  let fixture: ComponentFixture<RelatorioVazaoHorimetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioVazaoHorimetroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioVazaoHorimetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
