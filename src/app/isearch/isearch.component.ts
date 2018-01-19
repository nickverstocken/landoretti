import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isearch',
  templateUrl: './isearch.component.html',
  styleUrls: ['./isearch.component.scss']
})
export class IsearchComponent implements OnInit {
  results = [1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }

}
