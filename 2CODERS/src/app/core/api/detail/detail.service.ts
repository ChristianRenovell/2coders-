import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ResMoviesDetail } from './models/ReqMovieDetail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private token = environment.TOKEN;
  private apiUrl = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  getMoviesDetail(movie_id: number, language: string = "en"): Observable<ResMoviesDetail> {
    let url = this.apiUrl + movie_id +'?api_key='+ this.token + '&language='+language+'-US';
    return this.http.get<ResMoviesDetail>(url);
  }
}
