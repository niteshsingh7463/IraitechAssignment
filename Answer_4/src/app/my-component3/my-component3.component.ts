import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component3',
  templateUrl: './my-component3.component.html',
  styleUrls: ['./my-component3.component.css']
})
export class MyComponent3Component implements OnInit {
  @Input() inpText;
  constructor() { }

  ngOnInit() {
  }

}
