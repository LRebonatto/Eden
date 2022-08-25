import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GlobalService } from "app/services/global.service";

@Component({
  selector: "app-modal-permissions-user",
  templateUrl: "./modal-permissions-user.component.html",
  styleUrls: ["./modal-permissions-user.component.css"],
})
export class ModalPermissionsUserComponent implements OnInit {

  user
  menus_principal = [
    {
      allComplete:false,
      name: "Dashboards",
      checked: false,
      type_menu:'link',
      subtasks: [], 
    },
    {
      allComplete:false,
      name: "Cadastros",
      checked: false,
      type_menu:'sub',
      subtasks: [
        { name: "Usuario", checked: false },
        { name: "Grupo de usuario", checked: false }
      ],
    },
    {
      name: "Componentes",
      checked: false,
      type_menu:'link',
      subtasks:[]
    },
    {
      name: "Formularios",
      checked: false,
      type_menu:'link',
      subtasks:[]
    },
  ];

  menus1 = {
    allComplete:false,
    name: "Indeterminate",
    checked: false,
    color: "primary",
    subtasks: [
      { name: "Primary", checked: false, color: "primary" },
      { name: "Accent", checked: false, color: "accent" },
      { name: "Warn", checked: false, color: "warn" },
    ],
  };
  

  constructor(
    private globalService:GlobalService, 
    @Inject(MAT_DIALOG_DATA) public data) {
      this.user = data
    }

  ngOnInit(): void {
    console.log(this.data)
    this.getFixedPermissions()
    this.getNotFixedPermissions()
  }

  getFixedPermissions(){
    if(this.data.group_id == null){
      this.data.group_id = '00000000-0000-0000-0000-000000000000'
    }
    this.globalService.post('getAllSubmenusAndUserPermissionsMenus', {user_id:this.data.id, group_id:this.data.group_id, fixed:true})
      .subscribe((data:any)=>{
        console.log(data)
        this.menus_principal = data
        
      })
  }

  getNotFixedPermissions(){
    if(this.data.group_id == null){
      this.data.group_id = '00000000-0000-0000-0000-000000000000'
    }
    this.globalService.post('getAllSubmenusAndUserPermissionsMenus', {user_id:this.data.id, group_id:this.data.group_id, fixed:false})
      .subscribe((data:any)=>{
        console.log(data)
        this.menus1 = data
        
      })
  }

  updateAllComplete(menus) {
    menus.allComplete =
    menus.subtasks != null &&
    menus.subtasks.every((t) => t.checked);
  }

  someComplete(menus): boolean {
    if (menus.subtasks == null) {
      return false;
    }
    return (
      menus.subtasks.filter((t) => t.checked).length > 0 &&
      !menus.allComplete
    );
  }

  setAll(menus, checked: boolean) {
    menus.allComplete = checked;
    if (menus.subtasks == null) {
      return;
    }
    menus.subtasks.forEach((t) => (t.checked = checked));
  }
}
