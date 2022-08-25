import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericAlertComponent } from 'app/components/generic-alert/generic-alert.component';
import { GlobalService } from 'app/services/global.service';
import { IBranch } from '../interfaces-branch';

@Component({
  selector: 'app-modal-integration-branches',
  templateUrl: './modal-integration-branches.component.html',
  styleUrls: ['./modal-integration-branches.component.css']
})
export class ModalIntegrationBranchesComponent implements OnInit {

  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message;
  type;
  template;
  value;

  company_selected = null

  branches: IBranch[] = []

  task = {
    name: 'Selecionar todas filiais',
    completed: false,
    color: 'primary',
    subtasks: [],
  };
  allComplete: boolean = false;

  constructor( 
    private globalService: GlobalService 
  ) { }

  ngOnInit(): void {
    this.getNotIntegratedBranches()
  }

  getNotIntegratedBranches(){
    this.globalService.getAll('getBranchesToIntegrate')
      .subscribe((branches:any)=>{
        branches.map((branch)=>{
          branch.complete = false
        })
        this.branches = branches
        this.task.subtasks = branches
        console.log(this.task)
      })
  }

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  integrateBranches(){

    if(this.company_selected == null){
      this.type = "danger";
      this.template = 1;
      this.message = { Error: ['Selecione uma empresa para integrar'] };
      this.handleMessage()
    }else{
      let branch_to_integrate = []
      this.task.subtasks.forEach((element:any) => {
        if(element.completed){
          let objeto = {
            name: element.description,
            company_id: this.company_selected,
            internal_id: element.internal_id
          }
          branch_to_integrate.push(objeto)
        }
      });
  
      this.globalService.post('integratedBranch', {branches:branch_to_integrate})
        .subscribe(()=>{
          this.getNotIntegratedBranches()
        })
    }
  }
}
