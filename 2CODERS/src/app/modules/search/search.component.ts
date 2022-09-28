import { environment } from './../../../environments/environment';
import { SearchService } from './../../core/api/search/search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailComponent } from '../details/detail.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild(DetailComponent)
  child!: DetailComponent;

  inputSearch: any = "";
  results!: any[];
  randonImage: string = environment.DEFAULT_MAIN_IMAG;
  urlMovies: string = environment.URL_IMAGE_XL;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  searchMovie(event: { query: any; }) {
    this.searchService.getSearchMovies(event.query).subscribe(res=>{
      this.results = res.results;
    })
  }

  selectedMovie() {
    this.child.openModalDialog(this.inputSearch.id);
  }
  
}
