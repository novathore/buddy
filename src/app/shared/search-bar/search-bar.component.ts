import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {
  @Input() displayedText: string;
  @Output() onClick = new EventEmitter();

  @HostListener('click')
  OnClick() {
    this.onClick.emit();
  }
}
