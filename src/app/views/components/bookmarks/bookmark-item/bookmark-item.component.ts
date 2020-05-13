import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.less']
})
export class BookmarkItemComponent implements OnInit {
  @Input() topic: string = 'Boris Babax';
  @HostBinding('class.mobile') isMobile: boolean = false;

  public avatarColor: string;

  constructor(@Inject(DOCUMENT) window) {}

  ngOnInit(): void {
    //TODO store candidate
    this.isMobile = /Mobile/.test(window.navigator.userAgent);
    this.avatarColor = this.randomizeColor();
  }

  // TODO составить map цветов ~ букв
  private randomizeColor() {
    return '#'+((1<<24)*Math.random()|0).toString(16);
  }
}
