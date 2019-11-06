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

  constructor(private overlay: Overlay) {}

  public dispatchOverlay({dispatchedComponent, positionConfig, panelClass}: {
    dispatchedComponent: ComponentType<any>,
    positionConfig?: Point,
    panelClass?: string
  }): ComponentRef<any>  {
    this.overlayRef = this.createOverlayRef(panelClass);
    this.portal = this.createComponentPortal(dispatchedComponent);

    const positionStrategy = this.createPositionStrategy(positionConfig);

    this.overlayRef.updatePositionStrategy(positionStrategy);

    return this.overlayRef.attach(this.portal);
  }

  public detachOverlay() {
    if (!this.overlayRef) return;

    this.overlayRef.detach();
  }

  private createOverlayRef(panelClass: string) {
    if (this.overlayRef) return this.overlayRef;

    const overlay = this.overlay.create({panelClass, hasBackdrop: true, backdropClass: 'cdk-overlay-transparent-backdrop'});
    overlay.backdropClick().subscribe(() => this.detachOverlay());

    return overlay;
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
