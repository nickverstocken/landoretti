import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, infinite: true, dots: true,};
  constructor() { }

  ngOnInit() {
  }

}
