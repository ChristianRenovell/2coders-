import { Component, OnInit } from '@angular/core';
import { DetailService } from '@app/core/api/detail/detail.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  displayModal: boolean = false;

  constructor(
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
  }

  openModalDialog(id:number) {
    this.displayModal = true;
    this.detailService.getMoviesDetail(id).subscribe(res => {
      console.log(res)
    })
  }

}
