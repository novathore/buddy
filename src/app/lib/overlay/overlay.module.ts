import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppOverlayService} from './overlay.service';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [AppOverlayService]
})
export class AppOverlayModule {
}
