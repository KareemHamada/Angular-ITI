import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  @Input('LightBox') defaultColor: string = "yellow";
  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.border = "2px solid red";
    this.ele.nativeElement.style.color = "red";
  }

  @HostListener('mouseover') onMouseOver(){
    this.ele.nativeElement.style.border = `2px solid ${this.defaultColor}`;

  }
  @HostListener('mouseout') onMouseOut(){
    this.ele.nativeElement.style.border = "2px solid blue"

  }
}
