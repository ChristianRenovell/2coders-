import { CarouselComponent } from './carousel/carousel.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  tabsCategories } from '@app/shared/constants/endPoints';
 @Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(CarouselComponent)
   child!: CarouselComponent;

  display: boolean = false;
  categories: any = tabsCategories;

  constructor() { }

  ngOnInit(): void {}

  receiveMessage($event: any) {
    console.log($event)
  }

  handleChange(category: any) {
    this.child.getCategoriMovie(tabsCategories[category.index].endpoint);
}

}
