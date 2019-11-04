import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';



@NgModule({
  declarations: [SideNavComponent],
  entryComponents: [SideNavComponent],
  exports: [SideNavComponent],
  imports: [
    CommonModule
  ]
})
export class SideNavModule { }
