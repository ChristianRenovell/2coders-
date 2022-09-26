import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  movieRating: any [] = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    private favouritesService: FavouritesService
  ) {
    console.log(this.rutaActiva.snapshot.params)
  }

  ngOnInit(): void {
    /*this.favouritesService.getList().subscribe((res: any) => {
      this.favouritesList = res.results;
      console.log(this.favouritesList)
    })*/
    this.getFavourites();
  }

  getFavourites() {
    let result = this.favouritesService.getList().results;
    this.favouritesList = this.ratingValues(result);
  }


  ratingValues(result:any): any {
    result.map((movie: any) => {
      this.movieRating[movie.id] =  5 / 10 * movie.vote_average;
    })
    return result;
  }
}
