import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesktopComponent} from './desktop.component';
import {TobBarModule} from '../../../shared/tob-bar/tob-bar.module';
import {ViewPortModule} from '../../../shared/view-port/view-port.module';
import {SideNavModule} from '../../../shared/side-nav/side-nav.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [DesktopComponent],
  exports: [DesktopComponent],
  imports: [
    CommonModule,
    TobBarModule,
    ViewPortModule,
    SideNavModule,
    RouterModule
  ]
})
export class DesktopModule {
}
