import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './carousel.component';
import { CarouselService } from '@app/core/api/carousel/carousel.service';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    DataViewModule,
    SharedModule,
    CommonModule
  ],
  exports:[CarouselComponent],
  providers: [CarouselService]
})

export class CarouselModule { }
