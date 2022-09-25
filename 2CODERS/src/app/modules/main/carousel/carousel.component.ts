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

  constructor() { }

  ngOnInit(): void {}

  openDetailMovie(id: number) {
    this.child.openModalDialog(id);
  }

  updateMovieList(result: any) {
    this.movieList = result;
  }

  ngOnDestroy(): void {
    console.log(this.movieList)
    console.log("destruyo componete")
  }
  
}
