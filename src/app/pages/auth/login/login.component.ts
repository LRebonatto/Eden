import {Component, OnInit, ViewChild} from '@angular/core';
import {GenericAlertComponent} from 'app/components/generic-alert/generic-alert.component';
import {GlobalService} from 'app/services/global.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    @ViewChild(GenericAlertComponent, {static: true})
    alertModal: GenericAlertComponent;

    message: any = '';
    template: number = 0;
    type: string = '';
    value: number = 0;
    loading: boolean = false;
    test: Date = new Date();

    credentials = {
        email: '',
        password: '',
    };

    user;

    constructor(
        private globalService: GlobalService,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.globalService.post('login', this.credentials).subscribe(
            (result: any) => {
                window.localStorage.setItem(
                    this.globalService.encryptString('token'),
                    result.token
                );
                window.localStorage.setItem(
                    this.globalService.encryptString('userName'),
                    result.user.name
                );
                window.localStorage.setItem(
                    this.globalService.encryptString('userId'),
                    result.user.id
                );
                this.loading = false;
                this.router.navigate(['/home']);
            },
            (error) => {
                this.loading = false;
                this.type = 'danger';
                this.template = 1;
                switch (error.status) {
                    case 0: //"Unknown Error"
                        this.message = {Error: ['Falha na conexão com o banco de dados']};
                        this.handleMessage();
                        break;
                    case 401: //Unauthorized
                        this.message = {Error: ['Usuário ou senha inválidos']};
                        this.handleMessage();
                        break;
                    case 403: //forbidden
                        this.message = {Error: ['Sem permissão']};
                        this.handleMessage();
                        break;
                    case 404: //Not found
                        this.message = {Error: ['Não encontrado']};
                        this.handleMessage();
                        break;
                }
            }
        );
    }

    // -----------------------General functions---------------
    handleMessage() {
        this.alertModal.slowShow();
    }

    updateValue(data) {
        this.value = data;
    }

}
