import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from 'app/app.routing';
import { LoginComponent } from './auth/login/login.component';
import { ComponentsModule } from 'app/components/components.module';
import { RegisterComponent } from './auth/register/register.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectFilterModule } from 'mat-select-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageAccessDeniedComponent } from './page-access-denied/page-access-denied.component';
import { HomeComponent } from './home/home.component';
import { UsersShowComponent } from './users/users-show/users-show.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { MathJaxModule } from 'ngx-mathjax';
import { LottieModule } from 'ngx-lottie';
import { ServicesShowComponent } from './services/services-show/services-show.component';
import { ServicesCreateComponent } from './services/services-create/services-create.component';
import { ProjectsCreateComponent } from './projects/projects-create/projects-create.component';
import { ProjectsShowComponent } from './projects/projects-show/projects-show.component';
import { TicketsCreateComponent } from './tickets/tickets-create/tickets-create.component';
import { TicketsShowComponent } from './tickets/tickets-show/tickets-show.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PageAccessDeniedComponent,
    HomeComponent,
    UsersShowComponent,
    UsersCreateComponent,
    ServicesShowComponent,
    ServicesCreateComponent,
    ProjectsCreateComponent,
    ProjectsShowComponent,
    TicketsCreateComponent,
    TicketsShowComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    BrowserModule,
    MatFormFieldModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
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
    NgxMaterialTimepickerModule.setLocale('pt-BR'),
    MatSelectFilterModule,
    MatDialogModule,
    MatMenuModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
  ],
  exports:[
  ]
})
export class PagesModule { }
