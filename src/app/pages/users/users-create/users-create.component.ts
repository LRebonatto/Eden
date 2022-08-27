import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericAlertComponent } from 'app/components/generic-alert/generic-alert.component';
import { AuthService } from 'app/services/auth.service';
import { GlobalService } from 'app/services/global.service';
import { IUsers } from '../interface-users';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message;
  type;
  template;
  value;

  me_data:any;
  confirm_pass:string = ''
  
  user: IUsers = {
    name:null,
    email:null,
    active:true,
    password:'',
    phone:null,
    user_login:null,
    app_password:null,
    role:null,
    group_id:null,
    first_login:null,
    can_create:null,
    can_create_header:null,
    can_edit:null,
    can_delete:null,
    can_list:null,
    can_finish_header:null,
    can_followup:null,
    branch_id:''
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
    console.log(this.user);
    this.me();
    let id = String(this.activatedRoute.snapshot.paramMap.get("id"));
    if(id != '00000000-0000-0000-0000-000000000000'){
      this.get(id)
      this.user.password = ''
      this.mode_edit = true
    }
  }

  me(){
    this.globalService.getAll('me').
      subscribe((user)=>{
        this.me_data = user
      })
  }

  get(id){
    this.globalService.get('users', id)
      .subscribe((user:{data:IUsers})=>{
        this.user = user.data
        this.user.password = ''
      }, error =>{
        console.log(error)
      })
  }

  save() {
    let branch_id = this.authService.getBranch();
    this.user.branch_id = branch_id;
    this.globalService.post("users", this.user).subscribe(
      (user: IUsers) => {
        console.log(user);
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

  validation(edit){
    this.message = {
      Error:[]
    }

    let error:boolean = false
    
    this.type = "danger";
    this.template = 1;
    if (this.user.name == "" || this.user.name == null) {
      this.message.Error.push('Nome obrigatório')
      error = true
    } 
    if (this.user.email == "" || this.user.email == null) {
      this.message.Error.push('E-mail obrigatório')
      error = true
    }
    if (!this.mode_edit && (this.user.password == "" || this.user.password == null)) {
      this.message.Error.push('Senha obrigatória')
      error = true
    }
    if (!this.mode_edit && (this.confirm_pass == "" || this.confirm_pass == null)) {
      this.message.Error.push('Confirma senha obrigatória')
      error = true
    }
    if ((this.confirm_pass != "" || this.user.password != "" ) && (this.confirm_pass != this.user.password)) {
      this.message.Error.push('As senhas não coincidem')
      error = true
    }
    // if (this.user.group_id == null) {
    //   this.message.Error.push('Grupo obrigatório')
    //   error = true
    // }
    if (this.user.role == null) {
      this.message.Error.push('Função obrigatória')
      error = true
    }
    // if (this.user.email == "" || this.user.email == null) {
    //   this.message.Error.push('E-mail obrigatório')
    //   error = true
    // }

    if(error){
      this.handleMessage();
    } else {
      if(edit){
        this.edit()
      } else {
        this.save()
      }
    }
    console.log(this.user);
  }

  edit(){
    this.globalService.update("users", this.user.id, this.user).subscribe(
      (user: IUsers) => {
        console.log(user);
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

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }

}
