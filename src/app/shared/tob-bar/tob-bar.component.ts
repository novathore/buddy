import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less']
})
export class TobBarComponent {
  @Input() displayedText: string;
  @Output() onClick = new EventEmitter();

  @HostListener('click')
  OnClick() {
    this.onClick.emit();
  }
}
