import { CarouselComponent } from '../carousel/carousel.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { tabsCategories } from '@app/shared/constants/endPoints';
import { MainService } from '@app/core/api/main/main.service';
import { SearchComponent } from '../search/search.component';
import { ResMoviesList } from '@app/core/api/carousel/models/ReqMoviesList';
import { ResMoviesDetail } from '@app/core/api/detail/models/ReqMovieDetail';

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
  movielList!: ResMoviesList;
  initComponent: boolean = true;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  handleChange(category: any) {
    this.getMovieList(tabsCategories[category.index].endpoint);
  }

  getMovieList(category: any = tabsCategories[0].endpoint): void {
    this.mainService.getMoviesDetail(category).subscribe((res: ResMoviesList) => {
      this.movielList = res;
      this.childCarousel.updateMovieList(this.movielList.results);
      if(this.initComponent) this.childSearch.randonImage = this.movielList.results[this.randonIndex()].poster_path;
      this.initComponent = false;
    })
  }

  randonIndex():number {
    return Math.floor(Math.random() * 20)
  }
}
