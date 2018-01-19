import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  menu = 'closed';
  constructor() { }

  ngOnInit() {
  }
    toggleMenu(){
      this.menu === 'closed' ? this.menu = 'open' : this.menu = 'closed';
    }
}
