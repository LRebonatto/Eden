import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { NgChartsModule } from 'ng2-charts';
import { ComponentsModule } from 'app/components/components.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { UserProfileComponent } from "app/user-profile/user-profile.component";
import { NotificationsComponent } from "app/notifications/notifications.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    NgChartsModule,
    ComponentsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCheckboxModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  declarations: [
    UserProfileComponent,
    NotificationsComponent,
    AdminLayoutComponent,
  ]
})
export class AdminLayoutModule { }
