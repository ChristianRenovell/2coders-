import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ReqMoviesList } from './models/ReqMoviesList';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private token = environment.TOKEN;
  private apiUrl = environment.URL;
  
  constructor(
    private http: HttpClient
  ) { }

  getMovies(endpoint: string, language: string = "en", page: number = 1): Observable<ReqMoviesList> {
    let url = this.apiUrl + endpoint +'?api_key='+ this.token + '&language='+language+'-US&page=' + page;
    return this.http.get<ReqMoviesList>(url);
  }
}
