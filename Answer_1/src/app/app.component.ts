import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson';
inpVal:number=null;
showVal:number=null;
show(){
  if(this.inpVal%2==0){
this.showVal=((this.inpVal+1)*(this.inpVal+1))+1;


}else{
  this.showVal=((this.inpVal+1)*(this.inpVal+1))-1;
}
}
}

