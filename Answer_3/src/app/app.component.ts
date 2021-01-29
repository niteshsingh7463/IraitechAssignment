import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _fb:FormBuilder) { }
  nestedForm:FormGroup;
  ngOnInit() {
    this.nestedForm =this._fb.group({

      'arrayPhNumbers':this._fb.array([this.addPhNumberGroup()])
    })
  }
  addPhNumberGroup(){
    return this._fb.group({

      'addPhNumber' :[]
    });
  }
  get phNumbersArray() {return <FormArray>this.nestedForm.get('arrayPhNumbers')}

  submitFun() {
    console.log('submit worked');
let allNumbers = this.nestedForm.get('arrayPhNumbers').value;
let allNumbers2=[];
for(let i=0;i<allNumbers.length;i++){
let name = 'phoneNumber'+(i+1);
  allNumbers2.push({[name]:allNumbers[i].addPhNumber});
}
console.log(allNumbers2);

}
addPhNumberBtn(){
  this.phNumbersArray.push(this.addPhNumberGroup());
}
removeBtn(index){
  this.phNumbersArray.removeAt(index);
}

}

