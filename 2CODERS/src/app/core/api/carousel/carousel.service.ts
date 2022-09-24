import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ResMoviesList } from './models/ReqMoviesList';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private token = environment.TOKEN;
  private apiUrl = environment.URL;
  
  constructor(
    private http: HttpClient
  ) { }

  getMovies(categories: string, language: string = "en", page: number = 1): Observable<ResMoviesList> {
    let url = this.apiUrl + categories +'?api_key='+ this.token + '&language='+language+'-US&page=' + page;
    return this.http.get<ResMoviesList>(url);
  }
}
