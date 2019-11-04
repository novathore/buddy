import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TobBarComponent} from './tob-bar.component';
import {MatIconModule} from '@angular/material';


@NgModule({
  declarations: [TobBarComponent],
  exports: [TobBarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class TobBarModule {
}
