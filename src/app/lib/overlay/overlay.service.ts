import {ComponentRef, Injectable, Injector} from '@angular/core';
import {ComponentType, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Point} from '@angular/cdk/typings/drag-drop/drag-ref';

@Injectable({
  providedIn: 'root'
})
export class AppOverlayService {
  private portal: ComponentPortal<any>;
  private overlayRef: OverlayRef;
  private component: ComponentRef<any>;

  constructor(private overlay: Overlay) {}

  public dispatchOverlay({dispatchedComponent, positionConfig, panelClass}: {
    dispatchedComponent: ComponentType<any>,
    positionConfig?: Point,
    panelClass?: string
  }): { component: ComponentRef<any>, overlay: OverlayRef }  {
    this.overlayRef = this.createOverlayRef(panelClass);

    this.portal = this.createComponentPortal(dispatchedComponent);

    const positionStrategy = this.createPositionStrategy(positionConfig);

    this.overlayRef.updatePositionStrategy(positionStrategy);

    if (!this.component) {
      this.component = this.overlayRef.attach(this.portal);
    }

    return { component: this.component, overlay: this.overlayRef }
  }

  public detachOverlay() {
    if (!this.overlayRef) return;

    this.overlayRef.detach();
    this.component = null;
  }

  private createOverlayRef(panelClass: string) {
    if (this.overlayRef) return this.overlayRef;

    return this.overlay.create({panelClass, hasBackdrop: true, backdropClass: 'cdk-overlay-transparent-backdrop'});
  }

  private createPositionStrategy(positionConfig: Point = { x: 0, y: 0}) {
    const { x, y } = positionConfig;

    return this.overlay
      .position()
      .global()
      .top(`${x}px`)
      .left(`${y}px`);
  }

  private createComponentPortal(component: ComponentType<any>) {
    if (this.portal) return this.portal;

    return new ComponentPortal(component, null);
  }
}
