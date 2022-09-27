import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {RatingModule} from 'primeng/rating';
import {BadgeModule} from 'primeng/badge';
import {DialogModule} from 'primeng/dialog';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DataViewModule} from 'primeng/dataview';
import {OrderListModule} from 'primeng/orderlist';
import { TabViewModule } from 'primeng/tabview';
import {AvatarModule} from 'primeng/avatar';
import {KnobModule} from 'primeng/knob';

const primeMgComponets = [
  KnobModule,
  AvatarModule,
  CarouselModule,
  TabViewModule,
  DialogModule,
  BadgeModule,
  RatingModule,
  PasswordModule,
  CardModule,
  CheckboxModule,
  StyleClassModule,
  ButtonModule,
  InputTextModule,
  AutoCompleteModule,
  DataViewModule,
  OrderListModule
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
