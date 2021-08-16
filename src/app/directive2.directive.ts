import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfIgnacio]'
})
export class Directive2Directive implements OnChanges {

  @Input() ngIfIgnacio: boolean = true;
  @Output() test = new EventEmitter<any>();

  ngOnChanges(changes: any) {
    console.log(changes);
    this.setView(changes.ngIfIgnacio.currentValue);
    this.test.emit('output structural');
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  setView(show: boolean) {
    if (show) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
