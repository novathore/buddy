import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.less']
})
export class MainViewComponent implements OnInit {

  constructor(@Inject(DOCUMENT) window) { }
  public isMobile: boolean;
  public displayedTextForDesktop: string = 'Buddy Menu';

  ngOnInit() {
    this.isMobile = /Mobile/.test(window.navigator.userAgent);
  // this.isMobile = true;
  }
}
