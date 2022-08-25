import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericAlertComponent } from 'app/components/generic-alert/generic-alert.component';
import { GenericConfirmModalComponent } from 'app/components/generic-confirm-modal/generic-confirm-modal.component';
import { AuthService } from 'app/services/auth.service';
import { GlobalService } from 'app/services/global.service';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';
import { IGroups } from '../interface-groups';

@Component({
  selector: 'app-groups-show',
  templateUrl: './groups-show.component.html',
  styleUrls: ['./groups-show.component.css']
})
export class GroupsShowComponent implements OnInit {
  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message;
  type;
  template;
  value;
  
  p:number = 0
  filter
  groups:IGroups[] = []
  loading:boolean = false

  constructor(
    public dialog: MatDialog, 
    private globalService:GlobalService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    let branch_id = this.authService.getBranch()
    this.loading = true
    this.globalService.getAll(`groups?branch_id=${branch_id}`)
      .subscribe((groups:IGroups[])=>{
        this.groups = groups
        this.loading = false
      }, error =>{
        this.loading = false
        console.log(error)
      })
  }
  confirmDialog(id): void {

    const dialogRef = this.dialog.open(GenericConfirmModalComponent, {
      maxWidth: "400px",
      data: {
      
        title : 'Confirmação',
        message : 'Tem certeza que deseja deletar isso?',
        button_ok : 'Sim',
        button_cancel : 'Cancelar'
      }
    })

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult == true){
        this.delete(id);
      }
    });
  }

  delete(id){
    this.globalService.delete('groups', id)
      .subscribe(()=>{
       
        this.message = "Excluído com sucesso";
        this.type = "success";
        this.template = 2;
        this.handleMessage();
        this.get()
      })
  }

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }

}
