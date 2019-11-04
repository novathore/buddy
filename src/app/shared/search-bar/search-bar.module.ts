import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar.component';
import {MatIconModule} from '@angular/material';


@NgModule({
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SearchBarModule {
}
