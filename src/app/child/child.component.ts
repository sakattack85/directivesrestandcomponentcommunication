import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() increasecounterevent= new EventEmitter()
  @Output() sendphtmlonmouseover=new EventEmitter();
 @Output() sendp=new EventEmitter<String>();
counter=0;
increasecounter(){
  this.increasecounterevent.emit(++this.counter)
}
 getpinnerhtml(element){
this.sendphtmlonmouseover.emit(element.innerHTML)
 }

sendtoparent="hello appcomponent"
  constructor() { }

  senddatap(){
    this.sendp.emit(this.sendtoparent);
  }

  ngOnInit(): void {
  
  }

  

}
