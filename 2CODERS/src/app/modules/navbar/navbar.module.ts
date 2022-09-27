import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-router.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [{path: "", component: NavbarComponent}]

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    SharedModule,
    NavbarRoutingModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [NavbarRoutingModule]
})
export class NavbarModule {
  constructor(){ }
 }
