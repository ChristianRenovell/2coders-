import { CarouselComponent } from './carousel/carousel.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { tabsCategories } from '@app/shared/constants/endPoints';
import { MainService } from '@app/core/api/main/main.service';
import { SearchComponent } from '../search/search.component';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(CarouselComponent)
  childCarousel!: CarouselComponent;

  @ViewChild(SearchComponent)
  childSearch!: SearchComponent;

  display: boolean = false;
  categories: any = tabsCategories;
  movielList: any;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  receiveMessage($event: any) {
    console.log($event)
  }

  handleChange(category: any) {
    this.getMovieList(tabsCategories[category.index].endpoint);
  }

  getMovieList(category: any = tabsCategories[0].endpoint) {
    this.mainService.getMoviesDetail(category).subscribe(res => {
      this.movielList = res.results;
      this.childCarousel.movieList = this.movielList;
      this.childSearch.randonImage = this.movielList[this.randonIndex()].poster_path;
    })
  }

  randonIndex():number {
    return Math.floor(Math.random() * 20)
  }


}
