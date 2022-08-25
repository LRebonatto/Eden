import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapToIterablePipe } from './map-to-iterable.pipe';



@NgModule({
  declarations: [MapToIterablePipe],
  imports: [
    CommonModule
  ],
  exports:[
    MapToIterablePipe,
  ],
  providers: [MapToIterablePipe]
})
export class PipesModule { }
