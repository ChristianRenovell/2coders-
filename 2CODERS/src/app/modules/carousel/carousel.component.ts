import { tabsCategories } from '@app/shared/constants/endPoints';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { CarouselService } from '@app/core/api/carousel/carousel.service';
import { environment } from '@environments/environment';
import { DetailComponent } from '../details/detail.component';
import { ResMoviesList, Results } from '@app/core/api/carousel/models/ReqMoviesList';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @ViewChild(DetailComponent)
  child!: DetailComponent;

  movieList!: any;
  urlMovies: string = environment.URL_IMAGE;
  idMovie: number | undefined;
  carouselVisible: boolean = true;
  rating: any[] = [];
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  openDetailMovie(id: number): void {
    this.child.openModalDialog(id);
  }

  updateMovieList(result: any): void {
    this.movieList = result;
    this.addRatingMovie(this.movieList);
  }

  addRatingMovie(movieList: any): void {
    movieList.map((movie: any) => {
      this.rating[movie.id] = Math.trunc(10 / 1000 * movie.popularity);
    })
  }

  ngOnDestroy(): void { }
}
