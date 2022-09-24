import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {SidebarModule} from 'primeng/sidebar';
import {RatingModule} from 'primeng/rating';

const primeMgComponets = [
  RatingModule,
  PasswordModule,
  CardModule,
  CheckboxModule,
  StyleClassModule,
  ButtonModule,
  InputTextModule,
  CarouselModule,
  SidebarModule
]

@NgModule({
  declarations: [],
  imports: [
    primeMgComponets,
    CommonModule
  ],
  exports: [primeMgComponets]
})
export class SharedModule { }
