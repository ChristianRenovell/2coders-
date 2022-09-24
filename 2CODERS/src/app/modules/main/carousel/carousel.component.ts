import { tabsCategories } from '@app/shared/constants/endPoints';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarouselService } from '@app/core/api/carousel/carousel.service';
import { environment } from '@environments/environment';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number>();

  @Input()
  movieList!: any;
  urlMovies: string = environment.URL_IMAGE;
  idMovie: number | undefined;
  val4: number = 5;

  constructor(
    private carouselService: CarouselService
  ) { }

  ngOnInit(): void {
    this.getMoviesList();
  }

  sendMessage(id: any) {
    this.messageEvent.emit(id)
  }

  getMoviesList(category: string = tabsCategories[0].endpoint): void {
    this.carouselService.getMovies(category).subscribe(res => {
      this.movieList = res.results;
      this.idMovie = this.movieList[0].id;
      this.sendMessage(this.movieList[0].id);
    })
  }

  getCategoriMovie(category: string) {
    this.getMoviesList(category);
  }
}
