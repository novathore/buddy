import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-overlay-side-nav',
  templateUrl: './overlay-side-nav.component.html',
  styleUrls: ['./overlay-side-nav.component.less']
})
export class OverlaySideNavComponent implements OnInit {
  @HostBinding('class.open') open: boolean = false;
  @HostBinding('class.close') close: boolean = false;

  ngOnInit() {
    setTimeout(() => {this.open = true;}, 300);
  }
}
