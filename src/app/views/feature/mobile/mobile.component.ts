import {Component, Input} from '@angular/core';
import {SideNavComponent} from '../../../shared/side-nav/side-nav.component';
import {AppOverlayService} from '../../../lib/overlay/overlay.service';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.less']
})
export class MobileComponent {
  @Input() currentView: string;

  constructor(private overlay: AppOverlayService) {}
  private componentData$ = new ReplaySubject<string>(1);

  public showSideBar() {
    this.overlay.dispatchOverlay({dispatchedComponent: SideNavComponent, bindings: this.componentData$});
    this.componentData$.next('foo')
  }
}
