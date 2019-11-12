import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal.component';



@NgModule({
  declarations: [JournalComponent],
  exports: [JournalComponent],
  imports: [
    CommonModule
  ]
})
export class JournalModule { }
