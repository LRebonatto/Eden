import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserModule } from "@angular/platform-browser";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { NgChartsModule } from 'ng2-charts';
import { AuthTokenInterceptor } from "./interceptors/auth-token.interceptor";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MathJaxModule } from "ngx-mathjax";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule,
    AppRoutingModule,
    MatStepperModule,
    MatDatepickerModule,
    MatTabsModule,
    NgChartsModule,
    ComponentsModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MathJaxModule.forRoot({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    }),
   LottieModule.forRoot({ player: playerFactory })
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    AppRoutingModule,
    MatDatepickerModule,
  ],
  declarations: [AppComponent],
  providers: [
    AdminLayoutComponent,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
