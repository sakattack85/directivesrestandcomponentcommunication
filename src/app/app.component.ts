import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  childtext=""
  getfromchildonclick="I will change on click"
  counter_p:number=1;
  strarray=['hi1','hi2','hi3']
  passtochild="Hello child"
  dynamiccolorvalue='blue'
showhidep:boolean=false;
log:number[]=[]
clickcount=0;

increasecounter(counter){
  this.counter_p=  counter;
}
getdataonmouseover(text){
this.childtext=text;
}

handlerfunction(childvar){
this.getfromchildonclick=childvar;
}

  togglep(){
    this.dynamiccolorvalue="grey"
this.showhidep=!this.showhidep;
this.log.push(++this.clickcount);
  }
}
