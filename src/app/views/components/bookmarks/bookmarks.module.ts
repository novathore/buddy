import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarksComponent} from './bookmarks.component';
import {BookmarkItemModule} from './bookmark-item/bookmark-item.module';


@NgModule({
  declarations: [BookmarksComponent],
  exports: [BookmarksComponent],
  imports: [
    CommonModule,
    BookmarkItemModule
  ]
})
export class BookmarksModule {
}
