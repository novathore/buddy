import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RemindersComponent} from './reminders.component';

@NgModule({
  declarations: [RemindersComponent],
  exports: [RemindersComponent],
  imports: [
    CommonModule
  ]
})
export class RemindersModule { }
