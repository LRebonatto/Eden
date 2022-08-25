import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericAlertComponent } from 'app/components/generic-alert/generic-alert.component';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @ViewChild(GenericAlertComponent, { static: true })
  alertModal: GenericAlertComponent;

  message;
  type;
  template;
  value;
  
  selectedFile = null
  image = null
  name

  confirm_pass = ''
  user:any = {
    name:'',
    email:''
  }
  constructor(private globalService:GlobalService) { }

  ngOnInit(  ) {
    this.me()
  }

  saveImage($event){

  }

  clearImg(){
    this.image = null
    this.selectedFile = null
  }

  clickButton(){
    document.getElementById('profile').click()
  }

  me(){
    this.globalService.getAll('me')
      .subscribe((me:any)=>{
        console.log(me)
        this.user = me
        this.user.password = ''
        this.image = me.photo
      })
  }

  updateUser(){
    this.globalService.update('users', this.user.id, this.user)
      .subscribe((user)=>{
        console.log(user)
        this.message = "Salvo com sucesso";
        this.type = "success";
        this.template = 2;
        this.handleMessage();
      })
  }

  validation(){
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
    if ((this.user.password == "" || this.user.password == null)) {
      this.message.Error.push('Senha obrigatória')
      error = true
    }
    if ((this.confirm_pass == "" || this.confirm_pass == null)) {
      this.message.Error.push('Confirma senha obrigatória')
      error = true
    }
    if ((this.confirm_pass != "" || this.user.password != "" ) && (this.confirm_pass != this.user.password)) {
      this.message.Error.push('As senhas não coincidem')
      error = true
    }

    if(error){
      this.handleMessage();
    } else {
      this.updateUser()
     
    }
  }

  handleMessage() {
    this.alertModal.show();
  }

  updateValue(data) {
    this.value = data;
  }

  deleteProfile(id){
    this.globalService.delete('userProfile', id)
      .subscribe(()=>{
        this.me()
      })
  }


  changeListener(event:any) : void {
    this.selectedFile = <File>event.target.files[0]
    this.readThis(event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    console.log(file)
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log(myReader.result);
      this.globalService.update(`updateNotPassword`, this.user.id, {photo:myReader.result})
        .subscribe((user)=>{
          console.log(user)
          console.log('fez o update')
        })
    }
    myReader.readAsDataURL(file);
  }
  
}
