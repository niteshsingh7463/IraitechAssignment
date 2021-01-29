import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component4',
  templateUrl: './my-component4.component.html',
  styleUrls: ['./my-component4.component.css']
})
export class MyComponent4Component implements OnInit {
  @Input() inpText;
  constructor() { }

  ngOnInit() {
  }

}
