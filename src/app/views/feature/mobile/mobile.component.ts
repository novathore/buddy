import {Component, Input} from '@angular/core';
import {SideNavComponent} from '../../../shared/side-nav/side-nav.component';
import {AppOverlayService} from '../../../lib/overlay/overlay.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.less']
})
export class MobileComponent {
  @Input() currentView: string;

  constructor(private overlay: AppOverlayService) {}
  public showSideBar() {
    const sideBar = this.overlay.dispatchOverlay({
      dispatchedComponent: SideNavComponent
    });
    sideBar.instance.asSideBar = true;
    // sideBar.instance.someOutput.subscribe(val => console.log(val));
  }
}
