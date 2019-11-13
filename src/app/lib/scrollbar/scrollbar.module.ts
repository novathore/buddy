import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarComponent } from './scrollbar.component';



@NgModule({
  declarations: [ScrollbarComponent],
  exports: [ScrollbarComponent],
  imports: [
    CommonModule
  ]
})
export class ScrollbarModule { }
