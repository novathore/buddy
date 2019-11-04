import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.less']
})
export class MobileComponent {
  @Input() currentView: string;
}
