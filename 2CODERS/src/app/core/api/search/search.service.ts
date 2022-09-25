import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { ResMoviesList } from '../carousel/models/ReqMoviesList';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private token = environment.TOKEN;
  private apiUrl = environment.URL_SEARCH;

  constructor(
    private http: HttpClient
  ) { }

  getSearchMovies(query: string, language: string = "en"): Observable<ResMoviesList> {
    let url = this.apiUrl + '?api_key='+ this.token + '&language='+language+'-US&query=' + query + '&page=1&include_adult=false';
    return this.http.get<ResMoviesList>(url);
  }
}
