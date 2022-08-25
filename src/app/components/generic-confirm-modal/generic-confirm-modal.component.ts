import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-confirm-modal',
  templateUrl: './generic-confirm-modal.component.html',
  styleUrls: ['./generic-confirm-modal.component.css']
})
export class GenericConfirmModalComponent implements OnInit {

  title: string = 'Conformacao';
  message: string = 'Voce esta certo disso?';
  button_ok: string = 'ok';
  button_cancel: string = 'cancel';

  constructor(public dialogRef: MatDialogRef<GenericConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.title = data?.title;
    this.message = data?.message;
    this.button_ok = data?.button_ok;
    this.button_cancel = data?.button_cancel;
  }

  ngOnInit(): void {
  }

  onConfirm(){
    this.dialogRef.close(true);
  }

  onDismiss(){
    this.dialogRef.close(false);
  }

}
