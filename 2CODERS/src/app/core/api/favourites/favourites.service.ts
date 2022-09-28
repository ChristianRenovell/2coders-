import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ResMoviesList } from '../carousel/models/ReqMoviesList';
import { favouritesMock } from './mocks/favouritesMock';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private token = environment.TOKEN;
  private apiUrl = environment.URL_V4;

  constructor(
    private http: HttpClient
  ) { }

  //this call must be to a DB where the user's favourites are stored.
  getList(useMock: boolean = true):any  {
    if (!useMock) {
   

    } else {
      return favouritesMock;
    }
  }
}
