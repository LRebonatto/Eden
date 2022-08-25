import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare const $;
@Component({
  selector: 'app-generic-alert',
  templateUrl: './generic-alert.component.html',
  styleUrls: ['./generic-alert.component.css']
})
export class GenericAlertComponent implements OnInit {

  @Input() message: any = {};
  @Input() type = 'light';
  @Output() onChangeValue = new EventEmitter<any>();
  @Input() template: number = 1;
  
  constructor( private element: ElementRef ) { }

  ngOnInit(): void {
  }

  show() {
    this.getjQueryElement().modal('show');
    setTimeout(() => {this.hide()}, 2000);
  }
  slowShow() {
    this.getjQueryElement().modal('show');
    setTimeout(() => {this.hide()}, 8000);
  }
  

  hide() {
    this.onChangeValue.emit(1);
    this.getjQueryElement().modal('hide');
    
  }

  private getjQueryElement() {
    const nativeElement = this.element.nativeElement;
    return $(nativeElement.firstChild);
  }

}
