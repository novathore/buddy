import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {
  @Input() someText;
  @Input() asSideBar: boolean = false;
  @Output() someOutput = new EventEmitter();

  @HostBinding('class.sidebar') isSideBar: boolean = false;
  @HostBinding('class.animate') init: boolean = false;

  ngOnInit(): void {
    this.isSideBar = this.asSideBar;
    if (this.isSideBar) {
      setTimeout(() => {this.init = true;}, 300);
    }
  }
}
