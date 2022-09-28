import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResMoviesList } from '@app/core/api/carousel/models/ReqMoviesList';
import { FavouritesService } from '@app/core/api/favourites/favourites.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouritesList: any;
  sortField: any;
  sortOrder!: number;
  rating!: number;
  urlMovies: string = environment.URL_IMAGE;
  movieRating: any[] = [];

  constructor(
    private favouritesService: FavouritesService
  ) { }

  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites(): void {
    //database call mock to get the user's favourites list
    let result: ResMoviesList = this.favouritesService.getList().results;
    this.favouritesList = this.ratingValues(result);
  }

  ratingValues(result: any): any {
    result.map((movie: any) => {
      this.movieRating[movie.id] = 5 / 10 * movie.vote_average;
    })
    return result;
  }
}
