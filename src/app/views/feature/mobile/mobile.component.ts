import {Component, Input} from '@angular/core';
import {AppOverlayService} from '../../../lib/overlay/overlay.service';
import {OverlaySideNavComponent} from './overlay-side-nav/overlay-side-nav.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.less']
})
export class MobileComponent {
  @Input() currentView: string;

  constructor(private overlay: AppOverlayService) {}
  public showSideBar() {
    const component = this.overlay.dispatchOverlay({
      dispatchedComponent: OverlaySideNavComponent
    });
    console.log(component);
  }
}
