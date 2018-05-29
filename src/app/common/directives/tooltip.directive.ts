import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @HostBinding('class.tooltip-container')
  public tooltipContainer = true;

  private _tooltipContext: HTMLDivElement = document.createElement('div');

  @Input()
  public set appTooltip(value: string) {
    if (!value) {
      return;
    }
    this._tooltipContext.textContent = value;
  }


  constructor() {
  }

}
