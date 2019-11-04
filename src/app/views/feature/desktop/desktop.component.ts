import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.less']
})
export class DesktopComponent {
  @Input() currentView: string;
}
