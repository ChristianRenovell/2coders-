import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FavouritesService } from '@app/core/api/favourites/favourites.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: FavouritesComponent
  }
];

@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [FavouritesService]
})
export class FavouritesModule { }
