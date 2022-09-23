import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from './carousel/carousel.module';

const routes: Routes = [
  {
    path: '', component: MainComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CarouselModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers: []
})
export class MainModule { }
