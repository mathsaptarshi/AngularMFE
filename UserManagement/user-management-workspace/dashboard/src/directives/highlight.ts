import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  private el = inject(ElementRef)
  @Input() appHighlight = 'yellow';
  @Input() defaultColor = 'transparent'

  constructor(){

  }
  @HostListener('mouseenter') onMouseEnter(){
    this.setColor(this.appHighlight||'yellow')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setColor(this.defaultColor)
  }

  setColor(color:any){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
