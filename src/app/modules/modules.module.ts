import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MaterialTimePickerModule } from "@candidosales/material-time-picker";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatRadioModule } from "@angular/material/radio";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectFilterModule } from "mat-select-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MathJaxModule } from "ngx-mathjax";
import { LottieModule } from "ngx-lottie";
import { RelatorioEventosComponent } from "./Saneamento/relatorios/relatorio-eventos/relatorio-eventos/relatorio-eventos.component";
import { RelatorioGeralUnidadeComponent } from "./Saneamento/relatorios/relatorio-geral-unidade/relatorio-geral-unidade/relatorio-geral-unidade.component";
import { RelatorioGeralGrandezasComponent } from "./Saneamento/relatorios/relatorio-geral-grandezas/relatorio-geral-grandezas/relatorio-geral-grandezas.component";
import { RelatorioNiveisComponent } from "./Saneamento/relatorios/relatorio-niveis/relatorio-niveis/relatorio-niveis.component";
import { RelatorioNivelLocalidadesComponent } from "./Saneamento/relatorios/relatorio-nivel-localidades/relatorio-nivel-localidades/relatorio-nivel-localidades.component";
import { RelatorioVazaoHorimetroComponent } from "./Saneamento/relatorios/relatorio-vazao-horimetro/relatorio-vazao-horimetro/relatorio-vazao-horimetro.component";

export function playerFactory() {
  return import("lottie-web");
}

@NgModule({
  declarations: [
    RelatorioEventosComponent,
    RelatorioGeralUnidadeComponent,
    RelatorioGeralGrandezasComponent,
    RelatorioNiveisComponent,
    RelatorioNivelLocalidadesComponent,
    RelatorioVazaoHorimetroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatFormFieldModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatStepperModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    CodemirrorModule,
    NgxPaginationModule,
    MatRadioModule,
    MathJaxModule,
    Ng2SearchPipeModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MaterialTimePickerModule,
    NgxMaterialTimepickerModule.setLocale("pt-BR"),
    MatSelectFilterModule,
    MatDialogModule,
    MatMenuModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  exports: [],
})
export class ModuleModule {}
