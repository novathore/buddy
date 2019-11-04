import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesktopComponent} from './desktop.component';
import {NavBarModule} from '../../../shared/nav-bar/nav-bar.module';
import {SearchBarModule} from '../../../shared/search-bar/search-bar.module';
import {ViewPortModule} from '../../../shared/view-port/view-port.module';
import {SideNavModule} from '../../../shared/side-nav/side-nav.module';


@NgModule({
  declarations: [DesktopComponent],
  exports: [DesktopComponent],
  imports: [
    CommonModule,
    NavBarModule,
    SearchBarModule,
    ViewPortModule,
    SideNavModule
  ]
})
export class DesktopModule {
}
