import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';



@NgModule({
  declarations: [BookmarksComponent],
  exports: [BookmarksComponent],
  imports: [
    CommonModule
  ]
})
export class BookmarksModule { }
