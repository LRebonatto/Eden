import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor(
    // private modalService: BsModalService
    ) { }

  // showConfirmModal(messageButton = null, title = null, text = null) {

  //   var bsModalRef: BsModalRef

  //   if(messageButton != null){
  //     const initialState = {
  //       messageButton: messageButton,
  //       title: title,
  //       text: text
  //     };
  //     // bsModalRef.content.type = type
  //     bsModalRef = this.modalService.show(ConfirmModalComponent, {initialState});

  //   } else {
  //     bsModalRef = this.modalService.show(ConfirmModalComponent)
  //   }
  //   return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  // }
}
