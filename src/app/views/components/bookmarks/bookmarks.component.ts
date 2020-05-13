import { Component } from '@angular/core';

const namesMap = ['Boris', 'Gena', 'Sambo', 'Pupa'];

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.less']
})
export class BookmarksComponent {
  public topics = Array.from(Array(100))
    .map(v => namesMap[parseInt(Number(Math.random() * 4).toString())]);
}
