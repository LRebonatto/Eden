import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { IBranch } from "app/pages/branches/interfaces-branch";
import { IUserIntegration } from "../interface-users";
import { GlobalService } from "app/services/global.service";
import { GenericAlertComponent } from "app/components/generic-alert/generic-alert.component";

@Component({
  selector: "app-modal-integration-users",
  templateUrl: "./modal-integration-users.component.html",
  styleUrls: ["./modal-integration-users.component.css"],
})
export class ModalIntegrationUsersComponent implements OnInit {
  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  // --------------- Alerts --------------- //
  public message: any = {};
  public template: number = 1;
  public type: string = "danger";

  // --------------- Pagination --------------- //
  public p: number = 1;
  public filter;
  public totalRecords: number;

  // --------------- Instances --------------- //
  public roles = ["admin", "user"];
  public users: IUserIntegration[] = [];
  public branches: IBranch[] = [];
  public branch_id = null;
  public role = null;
  public allComplete: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalIntegrationUsersComponent>,
    private globalService: GlobalService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getBranches();
  }

  // ============ Get Requests ============ //
  getUsers(): void {
    this.globalService.getAll(`getUsersToIntegrate`).subscribe(
      (users: any) => {
        users.map((user) => {
          user.integrated = false;
        });
        this.users = users;
      },
      (error) => {}
    );
  }
  getBranches(): void {
    this.globalService
      .getAll("branches")
      .subscribe((branches: { data: IBranch[] }) => {
        this.branches = branches.data;
      });
  }

  // ============ Post Requests ============ //
  postIntegratedUser() {
    if (this.branch_id != null && this.role != null) {
      let usersToIntegrate = [];
      this.users.forEach((element) => {
        element.branch_id = this.branch_id;
        element.role = this.role;
        if (element.integrated) usersToIntegrate.push(element);
      });
      this.globalService
        .post("integratedUser", { users: usersToIntegrate })
        .subscribe(
          (response: any) => {
            this.dialogRef.close();
          },
          (error) => {
            this.message = { Error: ["Houve um erro na integração!"] };
            this.alertModal.show();
          }
        );
    } else {
      this.message = { Error: ["Selecione a Função e Filial!"] };
      this.alertModal.show();
    }
  }

  // ============ General Functions ============ //
  setAll(completed: boolean): void {
    this.allComplete = completed;
    if (this.users == null) {
      return;
    }
    this.users.forEach((t) => (t.integrated = completed));
  }

  updateAllComplete() {
    this.allComplete =
      this.users != null && this.users.every((t) => t.integrated);
  }

  someComplete(): boolean {
    if (this.users == null) {
      return false;
    }
    return (
      this.users.filter((t) => t.integrated).length > 0 && !this.allComplete
    );
  }
}
