import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './main-view.component';
import {MobileModule} from './feature/mobile/mobile.module';
import {DesktopModule} from './feature/desktop/desktop.module';


@NgModule({
  declarations: [MainViewComponent],
  exports: [MainViewComponent],
  imports: [
    CommonModule,
    MobileModule,
    DesktopModule
  ]
})
export class MainViewModule {
}
