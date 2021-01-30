import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input() color:any;
@HostListener('mouseover') mouseup(){
this.element.nativeElement.style.backgroundColor=this.color;

}
@HostListener('mouseout') mouseup1(){
  this.element.nativeElement.style.backgroundColor="yellow"
  
  }

  constructor(private element:ElementRef) { 

  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor="red"
    this.element.nativeElement.style.color="white"
  }

}
