import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  value1:string = "";
  value3: string = "";
  constructor() { 
    console.log("loginComponet")
  }

  ngOnInit(): void {
  }

}