import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, Optional} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {data} from '../../lib/overlay/overlay.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements AfterViewInit, OnDestroy {
  public displayedData: string;
  private destroy$ = new BehaviorSubject(false);

  constructor(
    @Optional() @Inject(data) private data$: ReplaySubject<string>,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.data$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((val) => {
      this.displayedData = val;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
