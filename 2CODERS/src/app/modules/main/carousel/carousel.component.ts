import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  cards: any[] = [1,2,3,4,5,6,7,8]

  
  constructor() { }

  ngOnInit(): void {
  }

}
