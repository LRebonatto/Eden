import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/auth.service";
import { GlobalService } from "app/services/global.service";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES = [];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any;

  constructor(
    private globalService: GlobalService,
    private authService: AuthService
  ) {
    this.getMenus();
  }

  ngOnInit() {
    this.menuItems = {};
  }

  // getMenus() {
  //   //Menus Dinâmicos
  //   let branch_id = this.authService.getBranch();
  //   let module_id = this.authService.getModule();

  //   this.globalService
  //     .getMenu("user_dynamic_menu_permitions", {
  //       branch_id: branch_id,
  //       module_id: module_id,
  //     })
  //     .subscribe((menus) => {
  //       this.menuItems = menus;
  //       var jsonAux = JSON.stringify(this.menuItems);
  //       window.localStorage.setItem(
  //         this.globalService.encryptString("menus"),
  //         jsonAux
  //       );
  //     });
  // }

  getMenus() { // Menus Fixos
    let branch_id = this.authService.getBranch();
    this.globalService
      .getMenu("user_fixed_menu_permitions", { branch_id: branch_id })
      .subscribe((menus) => {
        this.menuItems = menus;
      });
  }

  getPermissions() {
    let branch_id = this.authService.getBranch();
    let module_id = this.authService.getModule();
    this.globalService
      .getMenu("user_menu_permitions", { branch_id: branch_id, module_id: module_id })
      .subscribe((menus) => {
        var jsonAux = JSON.stringify(menus);
        window.localStorage.setItem(
          this.globalService.encryptString("menus"),
          jsonAux
        );
      });
  }
}
