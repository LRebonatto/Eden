import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GenericAlertComponent } from "app/components/generic-alert/generic-alert.component";
import { AuthService } from "app/services/auth.service";
import { GlobalService } from "app/services/global.service";
import { IGroups } from "../interface-groups";

@Component({
  selector: "app-groups-create",
  templateUrl: "./groups-create.component.html",
  styleUrls: ["./groups-create.component.css"],
})
export class GroupsCreateComponent implements OnInit {
  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message;
  type;
  template;
  value;

  group: IGroups = {
    description: "",
    // can_create: false,
    branch_id:'',
    active: true,
    // can_create_header: false,
    // can_delete: false,
    // can_edit: false,
    // can_finish_header: false,
    // can_followup: false,
    // can_list: false
  };
  loading: boolean = false;
  mode_edit: boolean = false;
  constructor(
    private globalService: GlobalService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    console.log(this.group);
    let id = String(this.activatedRoute.snapshot.paramMap.get("id"));
    if(id != '00000000-0000-0000-0000-000000000000'){
      this.get(id)
      this.mode_edit = true
    }
  }

  get(id){
    this.globalService.get('groups', id)
      .subscribe((group:IGroups)=>{
        this.group = group
      }, error =>{
        console.log(error)
      })
  }

  save() {
    let branch_id = this.authService.getBranch()
    this.group.branch_id = branch_id;
    if (this.group.description == "" || this.group.description == null) {
      this.message = {
        Error:[]
      }
      this.message.Error.push('Descrição obrigatória')
      this.type = "danger";
      this.template = 1;
      this.handleMessage();
    } else {
      this.globalService.post("groups", this.group).subscribe(
        (group: IGroups) => {
          console.log(group);
          this.message = "Salvo com sucesso";
          this.type = "success";
          this.template = 2;
          this.handleMessage();
          // this.router.navigate(['/user-groups'])
        },
        (error) => {
          console.log(error);
          this.message = error.Error
          this.type = "danger";
          this.template = 1;
          this.handleMessage();
        }
      );
    }
    console.log(this.group);
  }

  edit(){
    if (this.group.description == "" || this.group.description == null) {
      this.message = {
        Error:[]
      }
      this.message.Error.push('Descrição obrigatória')
      this.type = "danger";
      this.template = 1;
      this.handleMessage();
    } else {
      this.globalService.update("groups", this.group.id, this.group).subscribe(
        (group: IGroups) => {
          console.log(group);
          this.message = "Editado com sucesso";
          this.type = "success";
          this.template = 2;
          this.handleMessage();
          // this.router.navigate(['/user-groups'])
        },
        (error) => {
          console.log(error);
          this.message = error.Error
          this.type = "danger";
          this.template = 1;
          this.handleMessage();
        }
      );
    }
    console.log(this.group);
  }

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }
}
