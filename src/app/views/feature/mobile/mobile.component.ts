import {Component, ComponentRef, Inject, Input, OnDestroy} from '@angular/core';
import {AppOverlayService} from '../../../lib/overlay/overlay.service';
import {OverlaySideNavComponent} from './overlay-side-nav/overlay-side-nav.component';
import {fromEvent, Subject} from 'rxjs';
import {debounceTime, filter, map, switchMap, takeLast, takeUntil} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

const touchDifference = 150;

enum TOUCH_TYPES {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.less']
})
export class MobileComponent implements OnDestroy {
  @Input() currentView: string;
  private alreadySubscribed: boolean;
  private destroy$: Subject<void> = new Subject();
  private sideBarComponentInstance: ComponentRef<OverlaySideNavComponent>;

  constructor(private overlay: AppOverlayService, @Inject(DOCUMENT) private element: Document) {
    const nativeElement = this.element;

    fromEvent(nativeElement, 'touchstart').pipe(
      switchMap((start: TouchEvent) => {
        return fromEvent(nativeElement, 'touchmove').pipe(
          takeUntil(fromEvent(nativeElement, 'touchend')),
          takeLast(1),
          map((end: TouchEvent) => {
            const xBefore = start.touches[0].pageX;
            const xAfter = end.touches[0].pageX;

            if (xAfter - xBefore > touchDifference) {
              return TOUCH_TYPES.OPEN;
            }

            if (xBefore - xAfter > touchDifference) {
              return TOUCH_TYPES.CLOSE;
            }

            return false;
          }),
          filter((val) => Boolean(val))
        )
      })
    ).subscribe((touchType) => {
      switch (touchType) {
        case TOUCH_TYPES.OPEN:
          return this.showSideBar();
        case TOUCH_TYPES.CLOSE:
          return this.closeSideBar();
      }
    });
  }

  private showSideBar() {
    const { component, overlay } = this.overlay.dispatchOverlay({
      dispatchedComponent: OverlaySideNavComponent
    });

    this.sideBarComponentInstance = component;

    if (this.alreadySubscribed) return;

    this.alreadySubscribed = true;
    overlay.backdropClick().pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe(() => {
      this.closeSideBar();
    });
  }

  private closeSideBar() {
    if (!this.sideBarComponentInstance) return;
    this.sideBarComponentInstance.instance.close = true;
    setTimeout(() => this.overlay.detachOverlay(), 300);
  }

  ngOnDestroy(): void {
    this.sideBarComponentInstance = null;
    this.destroy$.next();
  }
}
