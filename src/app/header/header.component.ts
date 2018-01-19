import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedin = true;
  loginForm = true;
  constructor() { }

  ngOnInit() {
  }
    loginShow(){
      this.loginForm = true;
    }
    showLoggedin(){
      this.loggedin = true;
    }
    logout(){
      this.loggedin = false;
      this.loginForm = false;
    }
}
