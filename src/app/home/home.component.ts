import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    mostPopular = 'closed';
  constructor() { }

  ngOnInit() {
  }
    toggleMostPopular(){
     this.mostPopular === 'closed' ? this.mostPopular = 'open' : this.mostPopular = 'closed';
      console.log(this.mostPopular);
    }
}
