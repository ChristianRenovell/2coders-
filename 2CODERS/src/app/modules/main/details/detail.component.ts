import { Component, OnInit } from '@angular/core';
import { DetailService } from '@app/core/api/detail/detail.service';
import { ResMoviesDetail } from '@app/core/api/detail/models/ReqMovieDetail';
import { environment } from '@environments/environment';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  displayModal: boolean = false;
  detailMovie!: ResMoviesDetail;
  imageMovie: string = "";
  title: string = "";
  tagline: string = "";
  overview: string = "";
  rating: number = 3;
  
  constructor(
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
  }

  openModalDialog(id:number) {
    this.displayModal = true;
    this.detailService.getMoviesDetail(id).subscribe(res => {
      this.detailMovie = res;
      this.title = this.detailMovie.title;
      this.tagline = this.detailMovie.tagline;
      this.overview = this.detailMovie.overview;
      this.imageMovie = environment.URL_IMAGE + this.detailMovie.poster_path
    })
  }

}
