import {Component, OnInit, ViewChild} from '@angular/core';
import {GenericAlertComponent} from '../../../components/generic-alert/generic-alert.component';
import {MatDialog} from '@angular/material/dialog';
import {GlobalService} from '../../../services/global.service';
import {AuthService} from '../../../services/auth.service';
import {GenericConfirmModalComponent} from '../../../components/generic-confirm-modal/generic-confirm-modal.component';

@Component({
  selector: 'app-services-show',
  templateUrl: './services-show.component.html',
  styleUrls: ['./services-show.component.css']
})
export class ServicesShowComponent implements OnInit {

  @ViewChild(GenericAlertComponent, {static: true})
  alertModal: GenericAlertComponent;

  public message;
  public type;
  public template;
  public value;
  public p = 0;
  public filter;
  public services: any = [];
  public loading = false;

  constructor(
      public dialog: MatDialog,
      private globalService: GlobalService,
      private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.loading = true;
    this.globalService.getAll(`services`).subscribe(
        (response) => {
          this.services = response;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          console.log(error);
        }
    );
  }

  confirmDialog(id): void {
    const dialogRef = this.dialog.open(GenericConfirmModalComponent, {
      maxWidth: '400px',
      data: {
        title: 'Confirmação',
        message: 'Tem certeza que deseja deletar isso?',
        button_ok: 'Sim',
        button_cancel: 'Cancelar',
      },
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult === true) {
        this.delete(id);
      }
    });
  }

  delete(id) {
    this.globalService.delete('users', id).subscribe(() => {
      this.message = 'Excluído com sucesso';
      this.type = 'success';
      this.template = 2;
      this.handleMessage();
      this.get();
    });
  }

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }

}