import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private token = environment.TOKEN;
  private apiUrl = environment.URL;

  constructor(
    private http: HttpClient
  ) { }
}
