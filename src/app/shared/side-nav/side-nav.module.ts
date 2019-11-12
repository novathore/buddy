import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [SideNavComponent],
  entryComponents: [SideNavComponent],
  exports: [SideNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SideNavModule { }
