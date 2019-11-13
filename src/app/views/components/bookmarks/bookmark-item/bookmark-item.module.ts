import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarkItemComponent} from './bookmark-item.component';
import {FirstCharModule} from '../../../../lib/pipes/first-char/first-char.module';


@NgModule({
  declarations: [BookmarkItemComponent],
  exports: [BookmarkItemComponent],
  imports: [
    CommonModule,
    FirstCharModule
  ]
})
export class BookmarkItemModule {
}
