import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  constructor() { }

  @Input()user:any;
  @Output()actionUser=new EventEmitter<any>();

  public userForm=new FormGroup({
    name:new FormControl(""),
    age:new FormControl(0),
    id:new FormControl(1)
  })

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange){
   if('user' in changes){
     console.log("ngOnChanges fired");
      console.log(this.user);
      this.userForm.get('name')?.setValue(this.user.name);
      this.userForm.get('age')?.setValue(this.user.age)
   }
  }



  update(){
    this.actionUser.emit({value:this.userForm.value,action:"update"}); //pass the updated customer object to the container component
  }

  create(){
    this.actionUser.emit({value:this.userForm.value,action:"create"});
  }


}
