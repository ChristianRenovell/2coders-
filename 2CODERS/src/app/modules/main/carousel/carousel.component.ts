import { tabsCategories } from '@app/shared/constants/endPoints';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CarouselService } from '@app/core/api/carousel/carousel.service';
import { environment } from '@environments/environment';
import { DetailComponent } from '../details/detail.component';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number>();
  @ViewChild(DetailComponent)
  child!: DetailComponent;

  @Input()
  movieList!: any;
  urlMovies: string = environment.URL_IMAGE;
  idMovie: number | undefined;

  constructor() { }

  ngOnInit(): void {}

  openDetailMovie(id: number) {
    this.child.openModalDialog(id);
  }
}
