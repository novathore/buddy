import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySideNavComponent } from './overlay-side-nav.component';

describe('OverlaySideNavComponent', () => {
  let component: OverlaySideNavComponent;
  let fixture: ComponentFixture<OverlaySideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlaySideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
