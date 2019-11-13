import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCharPipe } from './first-char.pipe';



@NgModule({
  declarations: [FirstCharPipe],
  exports: [
    FirstCharPipe
  ],
  imports: [
    CommonModule
  ]
})
export class FirstCharModule { }
