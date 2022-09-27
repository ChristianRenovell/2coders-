import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'main',
    loadChildren: () => import('../main/main.module').then(m => m.MainModule)
      },
      {
        path: 'favourites',
    loadChildren: () => import('../favourites/favourites.module').then(m => m.FavouritesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule {
  constructor() { }
 }
