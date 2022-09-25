import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { SharedModule } from '@app/shared/shared.module';
import { DetailService } from '@app/core/api/detail/detail.service';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [DetailComponent],
  providers: [DetailService]
})
export class DetailModule { }
