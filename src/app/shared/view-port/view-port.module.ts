import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewPortComponent} from './view-port.component';


@NgModule({
  declarations: [ViewPortComponent],
  exports: [ViewPortComponent],
  imports: [
    CommonModule
  ]
})
export class ViewPortModule {
}
