import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {GenericAlertComponent} from 'app/components/generic-alert/generic-alert.component';
import {GenericConfirmModalComponent} from 'app/components/generic-confirm-modal/generic-confirm-modal.component';
import {AuthService} from 'app/services/auth.service';
import {GlobalService} from 'app/services/global.service';

@Component({
    selector: 'app-users-show',
    templateUrl: './users-show.component.html',
    styleUrls: ['./users-show.component.css'],
})
export class UsersShowComponent implements OnInit {
    @ViewChild(GenericAlertComponent, {static: true})
    alertModal: GenericAlertComponent;

    public message;
    public type;
    public template;
    public value;
    public p = 0;
    public filter;
    public users: any = [];
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
        this.globalService.getAll(`users`).subscribe(
            (users) => {
                this.users = users;
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
