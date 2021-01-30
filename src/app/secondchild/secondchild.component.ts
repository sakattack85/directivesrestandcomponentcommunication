import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
@Input() textfromchild;
  constructor() { }

  ngOnInit(): void {
  }

}
