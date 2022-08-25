import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MatIconModule } from "@angular/material/icon";
import { GenericAlertComponent } from "./generic-alert/generic-alert.component";
import { SweetalertComponent } from "./sweetalert/sweetalert.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule } from "@angular/forms";
import { GenericConfirmModalComponent } from "./generic-confirm-modal/generic-confirm-modal.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatMenuModule } from "@angular/material/menu";
import { PipesModule } from "app/pipes/pipes.module";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { ModalSelectBranchComponent } from "./modal-select-branch/modal-select-branch.component";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { GenericConfirmModalWithMessageComponent } from "./generic-confirm-modal-with-message/generic-confirm-modal-with-message.component";
import { MatInputModule } from "@angular/material/input";
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatAutocompleteModule,
    MatMenuModule,
    PipesModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    GenericAlertComponent,
    SweetalertComponent,
    GenericConfirmModalComponent,
    ModalSelectBranchComponent,
    GenericConfirmModalWithMessageComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    GenericAlertComponent,
    SweetalertComponent,
    GenericConfirmModalComponent,
    GenericConfirmModalWithMessageComponent,
  ],
  entryComponents: [
    GenericAlertComponent,
    GenericConfirmModalComponent,
    GenericConfirmModalWithMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
