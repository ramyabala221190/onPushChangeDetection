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
  @Input()str:string="";
  @Input()num:number=0;
  @Input()bool:boolean=false;
  @Input()date:Date=new Date();

  @Output()updateUser=new EventEmitter<any>();
  @Output()createUser=new EventEmitter<any>();


  public userForm=new FormGroup({
    name:new FormControl(""),
    age:new FormControl(0),
    id:new FormControl(1)
  })

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange){
   if('user' in changes){
      this.userForm.get('name')?.setValue(this.user.name);
      this.userForm.get('age')?.setValue(this.user.age)
   }
  }

  update(){
    this.updateUser.emit(this.userForm.value); //pass the updated customer object to the container component
  }

  create(){
    this.createUser.emit(this.userForm.value);
  }


}
