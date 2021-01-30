import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dynamiccolorvalue='blue'
showhidep:boolean=false;
log:number[]=[]
clickcount=0;
  togglep(){
    this.dynamiccolorvalue="grey"
this.showhidep=!this.showhidep;
this.log.push(++this.clickcount);
  }
}
