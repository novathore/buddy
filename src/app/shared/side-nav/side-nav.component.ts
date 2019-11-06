import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {
  @Input() someText: string = 'pupa';
  @Input() asSideBar: boolean = false;
  @Output() someOutput = new EventEmitter();

  ngOnInit(): void {
  }
}
