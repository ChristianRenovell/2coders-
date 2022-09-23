import { Component, OnInit } from '@angular/core';
import { CarouselService } from '@app/core/api/carousel/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  cards: any[] = [1,2,3,4,5,6,7,8]

  
  constructor(
    private carouselService : CarouselService
  ) { }

  ngOnInit(): void {

    this.carouselService.getMovies("popular").subscribe(res=> {
      console.log(res);
    })

  }

}
