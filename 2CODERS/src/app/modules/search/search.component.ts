import { environment } from './../../../environments/environment';
import { SearchService } from './../../core/api/search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputSearch: string = "";
  results!: string[];
  randonImage: string = "/eqhKMZTLcieAvoH6CBqknTTfNby.jpg";
  urlMovies: string = environment.URL_IMAGE_XL;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(event: { query: any; }) {

}

}
