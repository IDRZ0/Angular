import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[directive1]'
})
export class Directive1Directive {

  @Input() color: string = 'yellow';
  @Output() outputTest = new EventEmitter<any>();

  @HostListener('click') onClick() {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.outputTest.emit('outputTest');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.border = '5px green solid';
  }

}
