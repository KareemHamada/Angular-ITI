import { Directive, ElementRef, HostListener,Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{
  @Input('LightBox') highlightColor: string = "yellow";
  @Input() defaultColor: string = "yellow";

  constructor(private ele:ElementRef) {
    // this.ele.nativeElement.style.border = `2px solid ${this.defaultColor}`;
    // this.ele.nativeElement.style.color = "red";
  } 
  ngOnChanges(): void {
    this.ele.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver(){
    this.ele.nativeElement.style.border = `2px solid ${this.highlightColor}`;

  }
  @HostListener('mouseout') onMouseOut(){
    this.ele.nativeElement.style.border = `2px solid ${this.defaultColor}`;

  }
}
