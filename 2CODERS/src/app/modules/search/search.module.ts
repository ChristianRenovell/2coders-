import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '@app/core/api/search/search.service';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule
  ],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
