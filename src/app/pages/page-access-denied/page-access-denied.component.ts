import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-access-denied',
  templateUrl: './page-access-denied.component.html',
  styleUrls: ['./page-access-denied.component.css']
})
export class PageAccessDeniedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  back(){
    window.history.back()
  }
}
