import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { AdminLayoutComponent } from "../../layouts/admin-layout/admin-layout.component";
import { GlobalService } from "app/services/global.service";
import { AuthService } from "app/services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalSelectBranchComponent } from "../modal-select-branch/modal-select-branch.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  //Instances
  private listTitles: any[];
  public location: Location;
  public userName: string = "";
  public userId: string = "";
  public branchName: string = "";
  public branchId: string = "";
  public image;
  public branches: any = [];
  public mobile_menu_visible: any = 0;
  public menuItems: any = {};
  public subItems: any = {};
  public darknight: boolean;
  public html = document.querySelector("html");
  private toggleButton: any;
  private sidebarVisible: boolean;

  public module: any = {
    path: null,
    id: null,
  };

  constructor(
    location: Location,
    private AdminLayoutComponent: AdminLayoutComponent,
    private globalService: GlobalService,
    private authService: AuthService,
    private element: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.location = location;
    this.sidebarVisible = false;
    this.getMenus();
  }

  ngOnInit() {
    this.me();
    this.userName = window.localStorage.getItem(
      this.globalService.encryptString("userName")
    );
    this.userId = window.localStorage.getItem(
      this.globalService.encryptString("userId")
    );
    this.branchName = window.localStorage.getItem(
      this.globalService.encryptString("branchName")
    );
    this.branchId = window.localStorage.getItem(
      this.globalService.encryptString("branchId")
    );
    if (localStorage.getItem("Dark") === "on") {
      this.html.classList.add("dark-edition");
      this.darknight = true;
    }
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
      var $layer: any = document.getElementsByClassName("close-layer")[0];
      if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
      }
    });
    this.getUserBranches();
  }

  me() {
    this.globalService.getAll("me").subscribe((me: any) => {
      this.image = me.photo;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalSelectBranchComponent, {
      width: "250px",
      data: this.branches,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  getUserBranches() {
    this.globalService
      .post("user_branches", { user_id: this.userId })
      .subscribe((branches) => {
        this.branches = branches;
      });
  }

  activeDarknight() {
    if (!this.darknight) {
      this.html.classList.add("dark-edition");
      this.AdminLayoutComponent.mode = "white";
      localStorage.setItem("Dark", "on");
    } else if (this.html.classList.contains("dark-edition")) {
      this.html.classList.remove("dark-edition");
      this.AdminLayoutComponent.mode = "black";
      localStorage.setItem("Dark", "off");
    }
  }

  logout() {
    this.globalService.post("logout", {}).subscribe(
      () => {
        window.localStorage.setItem(
          this.globalService.encryptString("menus"),
          ""
        );
        window.localStorage.setItem(
          this.globalService.encryptString("token"),
          ""
        );
        this.router.navigate(["auth"]);
      },
      (error) => {
        window.localStorage.setItem(
          this.globalService.encryptString("menus"),
          ""
        );
        window.localStorage.setItem(
          this.globalService.encryptString("token"),
          ""
        );
        this.router.navigate(["auth"]);
      }
    );
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName("body")[0];
    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);

    body.classList.add("nav-open");

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const body = document.getElementsByTagName("body")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    body.classList.remove("nav-open");
  }
  sidebarToggle() {
    var $toggle = document.getElementsByClassName("navbar-toggler")[0];

    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    const body = document.getElementsByTagName("body")[0];

    if (this.mobile_menu_visible == 1) {
      // $('html').removeClass('nav-open');
      body.classList.remove("nav-open");
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function () {
        $toggle.classList.remove("toggled");
      }, 400);

      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.classList.add("toggled");
      }, 430);

      var $layer = document.createElement("div");
      $layer.setAttribute("class", "close-layer");

      if (body.querySelectorAll(".main-panel")) {
        document.getElementsByClassName("main-panel")[0].appendChild($layer);
      } else if (body.classList.contains("off-canvas-sidebar")) {
        document
          .getElementsByClassName("wrapper-full-page")[0]
          .appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add("visible");
      }, 100);

      $layer.onclick = function () {
        //asign a function
        body.classList.remove("nav-open");
        this.mobile_menu_visible = 0;
        $layer.classList.remove("visible");
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove("toggled");
        }, 400);
      }.bind(this);

      body.classList.add("nav-open");
      this.mobile_menu_visible = 1;
    }
  }

  getMenus() {
    let branch_id = this.authService.getBranch();
    this.globalService
      .getMenu("user_fixed_menu_permitions", { branch_id: branch_id })
      .subscribe((menus) => {
        this.menuItems = menus;
      });
  }
}
