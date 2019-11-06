import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobileComponent} from './mobile.component';
import {TobBarModule} from '../../../shared/tob-bar/tob-bar.module';
import {ViewPortModule} from '../../../shared/view-port/view-port.module';
import {OverlaySideNavModule} from './overlay-side-nav/overlay-side-nav.module';


@NgModule({
  declarations: [MobileComponent],
  exports: [MobileComponent],
  imports: [
    CommonModule,
    TobBarModule,
    ViewPortModule,
    TobBarModule,
    OverlaySideNavModule
  ]
})
export class MobileModule {
}
