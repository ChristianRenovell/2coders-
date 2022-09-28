import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from '../carousel/carousel.module';
import { TabViewModule } from 'primeng/tabview';
import { SearchModule } from '../search/search.module';
import { MainService } from '@app/core/api/main/main.service';
import { NavbarRoutingModule } from '../navbar/navbar-router.module';

const routes: Routes = [
  {
    path: "", component: MainComponent
  }
]
@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    SearchModule,
    CarouselModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [MainService]
})
export class MainModule {
  constructor() { }
}
