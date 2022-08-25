import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-confirm-modal-with-message',
  templateUrl: './generic-confirm-modal-with-message.component.html',
  styleUrls: ['./generic-confirm-modal-with-message.component.css']
})
export class GenericConfirmModalWithMessageComponent implements OnInit {


  title: string = 'Conformacao';
  message: string = 'Voce esta certo disso?';
  button_ok: string = 'ok';
  button_cancel: string = 'cancel';
  justification = ''

 
  constructor(public dialogRef: MatDialogRef<GenericConfirmModalWithMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.title = data?.title;
    this.message = data?.message;
    this.button_ok = data?.button_ok;
    this.button_cancel = data?.button_cancel;
  }

  ngOnInit(): void {
  }

  onConfirm(){
    if(this.justification != ''){
      this.dialogRef.close({response:true, justification:this.justification});
    }
  }

  onDismiss(){
    this.dialogRef.close(false);
  }

}
