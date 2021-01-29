import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-component5',
  templateUrl: './my-component5.component.html',
  styleUrls: ['./my-component5.component.css']
})
export class MyComponent5Component implements OnInit {
  @Output() inpEvent = new EventEmitter;
  inpText5 = null;

  constructor() { }

  ngOnInit() {
  }

  onKey(){
this.inpEvent.emit(this.inpText5);
  }
}
