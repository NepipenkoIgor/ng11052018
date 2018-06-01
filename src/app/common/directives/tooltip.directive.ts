import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

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


  public constructor(private _elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    this._tooltipContext.className = 'tooltip';
    this._elementRef.nativeElement.appendChild(this._tooltipContext);
  }

  public hide(): void {
    this._tooltipContext.classList.remove('tooltip-active');
  }

  public show(): void {
    this._tooltipContext.classList.add('tooltip-active');
  }
}
