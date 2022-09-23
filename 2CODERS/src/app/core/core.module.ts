import { ApiModule } from './api/api.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [ApiModule],
  exports:[ApiModule],
  providers: [],
  bootstrap: []
})
export class CoreModule { }
