import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  value1: string = "";
  value3: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.router.navigate(['./app/main'])
  }
}
