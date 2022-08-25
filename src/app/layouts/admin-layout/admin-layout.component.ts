import { Component, OnInit } from "@angular/core";
import { Location, PopStateEvent } from "@angular/common";
import "rxjs/add/operator/filter";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

declare function require(moduleName: string): any;
export const { version: appVersion } = require("../../../../package.json");

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  public appVersion;
  constructor(public location: Location, private router: Router) {
    this.appVersion = appVersion;
  }
  mode: string;
  tip: boolean = false;
  tip_message = "Ligar";

  ngOnInit() {
    if (localStorage.getItem("tip") === "on") {
      document.body.classList.add("tip");
      this.tip = true;
      this.tip_message = "Desligar";
    }

    this.mode = localStorage.getItem("Dark") === "on" ? "white" : "black";

    const isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
    if (
      isWindows &&
      !document
        .getElementsByTagName("body")[0]
        .classList.contains("sidebar-mini")
    ) {
      document
        .getElementsByTagName("body")[0]
        .classList.add("perfect-scrollbar-on");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("perfect-scrollbar-off");
    }
    const elemMainPanel = <HTMLElement>document.querySelector(".main-panel");
    const elemSidebar = <HTMLElement>(
      document.querySelector(".sidebar .sidebar-wrapper")
    );

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else window.scrollTo(0, 0);
      }
    });
    this._router = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        elemMainPanel.scrollTop = 0;
        elemSidebar.scrollTop = 0;
      });
  }

  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
      navigator.platform.toUpperCase().indexOf("IPAD") >= 0
    ) {
      bool = true;
    }
    return bool;
  }

  toggleTip() {
    if (!this.tip) {
      this.tip = true;
      this.tip_message = "Desligar";
      document.body.classList.add("tip");
      localStorage.setItem("tip", "on");
    } else if (document.body.classList.contains("tip")) {
      this.tip = false;
      this.tip_message = "Ligar";
      document.body.classList.remove("tip");
      localStorage.setItem("tip", "off");
    }
  }
}
