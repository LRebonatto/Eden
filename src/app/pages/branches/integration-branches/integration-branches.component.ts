import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericAlertComponent } from 'app/components/generic-alert/generic-alert.component';
import { GenericConfirmModalComponent } from 'app/components/generic-confirm-modal/generic-confirm-modal.component';
import { GlobalService } from 'app/services/global.service';
import { IBranch } from '../interfaces-branch';
import { ModalIntegrationBranchesComponent } from '../modal-integration-branches/modal-integration-branches.component';

@Component({
  selector: 'app-integration-branches',
  templateUrl: './integration-branches.component.html',
  styleUrls: ['./integration-branches.component.css']
})
export class IntegrationBranchesComponent implements OnInit {
  
  branches:IBranch[] = []
  
  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message;
  type;
  template;
  value;

  loading:boolean = false
  constructor(
    private globalService: GlobalService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getBranches()
  }

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }

  getBranches(){
    this.globalService.getAll('branches')
      .subscribe((branches:{data:IBranch[]})=>{
        this.branches = branches.data
      })
  }

  confirmDialog(id){

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
    this.globalService.delete('branches', id)
      .subscribe(()=>{
       
        this.message = "Excluído com sucesso";
        this.type = "success";
        this.template = 2;
        this.handleMessage();
        this.getBranches()
      }, error =>{
        this.type = "danger";
        this.template = 1;
        this.message = {
          Error:['Não é possível excluir!']
        }
        this.handleMessage()
      })
  }

  integrateBranches(){
    const dialogRef = this.dialog.open(ModalIntegrationBranchesComponent, {
      width:'800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBranches()
    });
  }
  
}
