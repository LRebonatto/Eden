import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericAlertComponent } from 'app/components/generic-alert/generic-alert.component';
import { GlobalService } from 'app/services/global.service';
import { IBranch } from '../interfaces-branch';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message;
  type;
  template;
  value;

  branch:IBranch = {
    name:null,
    city:null,
    address:null,
    company_id:null
  }

  loading:boolean = false

  constructor(
    private globalService: GlobalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = String(this.activatedRoute.snapshot.paramMap.get("id"));
    this.getBranch(id)
  }

  getBranch(id){
    this.globalService.get('branches', id)
      .subscribe((branch:{data:IBranch})=>{
        this.branch = branch.data
      })
  }

  validation(){
    this.message = {
      Error:[]
    }

    let error:boolean = false
    
    this.type = "danger";
    this.template = 1;
    if (this.branch.name == "" || this.branch.name == null) {
      this.message.Error.push('Nome obrigatório')
      error = true
    } 
    if (this.branch.city == "" || this.branch.city == null) {
      this.message.Error.push('Cidade obrigatória')
      error = true
    }
    if (this.branch.address == "" || this.branch.address == null) {
      this.message.Error.push('Endereço obrigatório')
      error = true
    }
   
    if (this.branch.company_id == null) {
      this.message.Error.push('Empresa obrigatória')
      error = true
    }
  
    if(error){
      this.handleMessage();
    } else {
      this.edit()
    }
    
  }

  edit(){
    this.globalService.update('branches', this.branch.id, this.branch)
      .subscribe(()=>{
        this.message = "Salvo com sucesso";
        this.type = "success";
        this.template = 2;
        this.handleMessage();
      })
  }

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }
}
