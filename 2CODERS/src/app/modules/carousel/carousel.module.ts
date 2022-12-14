import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './carousel.component';
import { CarouselService } from '@app/core/api/carousel/carousel.service';
import { DetailModule } from '../details/detail.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    DetailModule,
    SharedModule,
    CommonModule
  ],
  exports:[CarouselComponent],
  providers: [CarouselService]
})

export class CarouselModule { }
