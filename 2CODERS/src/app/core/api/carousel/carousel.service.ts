import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private token = environment.TOKEN;
  private apiUrl = environment.URL;
  
  constructor(
    private http: HttpClient
  ) { }
}
