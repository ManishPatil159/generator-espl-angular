import { Component, Input } from '@angular/core';

@Component({
  selector: 'espl-container',
  template: `
  <div
    [attr.data-testid]="testid"
    class="clearFix px1"
    [ngClass]= "{
      'max-width-1': size === 1,
      'max-width-2': size === 2,
      'max-width-3': size === 3,
      'max-width-4': size === 4,
      'mx-auto': center
    }">
    <ng-content></ng-content>
  <div>
  `
})
export class EsplContainerComponent {
  @Input() size = 1;
  @Input() center = false;
  @Input() testid: string;
};
