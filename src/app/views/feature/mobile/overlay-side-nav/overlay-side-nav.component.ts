import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-overlay-side-nav',
  templateUrl: './overlay-side-nav.component.html',
  styleUrls: ['./overlay-side-nav.component.less']
})
export class OverlaySideNavComponent implements OnInit {
  @HostBinding('class.animate') init: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {this.init = true;}, 300);
  }
}
