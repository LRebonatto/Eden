import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericAlertComponent } from 'app/components/generic-alert/generic-alert.component';
import { ModalIntegrationUsersComponent } from 'app/pages/users/modal-integration-users/modal-integration-users.component';
import { AuthService } from 'app/services/auth.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-integration-users',
  templateUrl: './integration-users.component.html',
  styleUrls: ['./integration-users.component.css']
})
export class IntegrationUsersComponent implements OnInit {

  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  public users: any[] = [];
  public p: number = 1;
  public filter;
  public totalRecords: number;

  // --------------- Alerts --------------- //
  public message: any = "";
  public template: number = 0;
  public type: string = "";
  public value: number = 0;

  constructor(
    private globalService: GlobalService,
    public dialog: MatDialog,
    private authService: AuthService,
  ) { }
  ngOnInit(): void {
    this.getusers();
  }
  getusers(): void {
    let branch_id = this.authService.getBranch();
    this.globalService.getAll(`integratedUser`).subscribe(
      (response: any) => {
        this.users = response.slice().reverse();
      },
      (error) => {
      }
    );
  }
  integrateuser() {
    const dialogRef = this.dialog.open(ModalIntegrationUsersComponent, {
      minHeight: "30vh",
      minWidth: "50vw",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getusers();
      this.type = "success";
      this.template = 2;
      this.handleMessage();
    });
  }

  handleMessage() {
    this.alertModal.show();
  }
  updateValue(data) {
    this.value = data;
  }
}