import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mode: string
  constructor() { 
    this.mode = (localStorage.getItem("Dark") === "on") ? "white" : "black"
  }

  ngOnInit(): void {
  }

}
