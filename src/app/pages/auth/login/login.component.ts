import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { stringify } from "ajv";
import { GenericAlertComponent } from "app/components/generic-alert/generic-alert.component";
import { SweetalertComponent } from "app/components/sweetalert/sweetalert.component";
import { AuthService } from "app/services/auth.service";
import { GlobalService } from "app/services/global.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message: any = "";
  template: number = 0;
  type: string = "";
  value: number = 0;
  loading: boolean = false;
  test: Date = new Date();
  branch_selected;
  branches = [];
  need_select_branch: boolean = false;

  credentials = {
    email: "",
    password: "",
  };

  user;

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  login() {
    this.loading = true;
    this.globalService.post("login", this.credentials).subscribe(
      (result: any) => {
        window.localStorage.setItem(
          this.globalService.encryptString("token"),
          result.token
        );
        window.localStorage.setItem(
          this.globalService.encryptString("userName"),
          result.user.name
        );
        window.localStorage.setItem(
          this.globalService.encryptString("userId"),
          result.user.id
        );
        if (result.branches.length == 1) {
          this.credentials.email = "";
          this.credentials.password = "";
          this.user = result;
          window.localStorage.setItem(
            this.globalService.encryptString("branchName"),
            result.branches[0].name
          );
          window.localStorage.setItem(
            this.globalService.encryptString("branchId"),
            result.branches[0].id
          );
          this.authService.setBranch(result.branches[0].id);
          //this.getMenus();
          //If module_accesses.lenght == 1 => this.router.navigate(["/home"])
          //else if module_accesses.lenght > 1 => this.router.navigate(["/select-module"])
          this.router.navigate(["/select-module"]);
        } else {
          this.need_select_branch = true;
          this.branches = result.branches;
        }
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.type = "danger";
        this.template = 1;
        switch (error.status) {
          case 0: //"Unknown Error"
            this.message = { Error: ["Falha na conexão com o banco de dados"] };
            this.handleMessage();
            break;
          case 401: //Unauthorized
            this.message = { Error: ["Usuário ou senha inválidos"] };
            this.handleMessage();
            break;
          case 403: //forbidden
            this.message = { Error: ["Sem permissão"] };
            this.handleMessage();
            break;
          case 404: //Not found
            this.message = { Error: ["Não encontrado"] };
            this.handleMessage();
            break;
        }
      }
    );
  }

  // -----------------------General functions---------------
  setBranchId() {
    this.authService.setBranch(this.branch_selected.id);
    window.localStorage.setItem(
      this.globalService.encryptString("branchName"),
      this.branch_selected.name
    );
    //this.getMenus();
    this.router.navigate(["/select-module"]);
  }
  handleMessage() {
    this.alertModal.slowShow();
  }
  changed() {
    this.need_select_branch = false;
  }
  updateValue(data) {
    this.value = data;
  }

  // getMenus() {
  //   let branch_id = this.authService.getBranch();
  //   this.globalService
  //     .getMenu("user_menu_permitions", { branch_id: branch_id })
  //     .subscribe((menus) => {
  //       var jsonAux = JSON.stringify(menus);
  //       window.localStorage.setItem(
  //         this.globalService.encryptString("menus"),
  //         jsonAux
  //       );
  //     });
  // }
}
