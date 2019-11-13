import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TobBarComponent} from './tob-bar.component';


@NgModule({
  declarations: [TobBarComponent],
  exports: [TobBarComponent],
  imports: [
    CommonModule
  ]
})
export class TobBarModule {
}
