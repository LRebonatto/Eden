import { Component, OnInit } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { GlobalService } from "app/services/global.service";
import { IModules } from "./interface-modules";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";
import "@dotlottie/player-component";
@Component({
  selector: "app-select-module",
  templateUrl: "./select-module.component.html",
  styleUrls: ["./select-module.component.scss"],
})
export class SelectModuleComponent implements OnInit {
  
  //Instances
  public animation: AnimationItem;
  public modules: IModules[] = [];
  public selectedIndex;
  public branchName: string = "";
  public branchId: string = "";

  constructor(
    private globalService: GlobalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.branchId = window.localStorage.getItem(
      this.globalService.encryptString("branchId")
    );
    this.getModules();
  }

  //----------GET REQUESTS---------//
  getModules() {
    this.globalService
      .getAll("getUserActivedModulesPermitions?branch_id=" + this.branchId)
      .subscribe(
        (response: IModules[]) => {
          this.modules = response;
          this.modules.forEach((element) => {
            element.options = { path: element.module_img_path };
          });
        },
        (error) => {}
      );
  }

  //----------General Functions---------//
  selectModule(i, $event) {
    if (this.modules[i].user_active == 1){
      const player = $event.target;
      player.hover = false;
      player.play();
      this.selectedIndex = i;
      this.setModuleId(this.modules[i].id);
    }
  }
  setModuleId(module_id) {
    this.authService.setModule(module_id);
    setTimeout(() => {
      this.router.navigate(["/home"]);
    }, 2400);
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
