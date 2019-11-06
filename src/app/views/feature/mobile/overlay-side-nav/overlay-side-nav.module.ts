import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlaySideNavComponent} from './overlay-side-nav.component';
import {SideNavModule} from '../../../../shared/side-nav/side-nav.module';


@NgModule({
  declarations: [OverlaySideNavComponent],
  entryComponents: [OverlaySideNavComponent],
  imports: [
    CommonModule,
    SideNavModule
  ]
})
export class OverlaySideNavModule {
}
