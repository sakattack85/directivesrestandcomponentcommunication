import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Output() counterchanged=new EventEmitter()
  counter=0;
  interval;
  startgame(){
this.interval = setInterval(() => this.counterchanged.emit(++this.counter),1000)
  }
   stopgame(){
clearInterval(this.interval)
   }

}
