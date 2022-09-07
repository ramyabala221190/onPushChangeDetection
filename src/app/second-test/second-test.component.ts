import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { ClonerService } from '../cloner.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SecondTestComponent implements OnInit {

  constructor(private service:DataService,private clonerService:ClonerService) { }

  public arr=[1,2,3,4,5];
  public todos:any=[];
  public todos$:Observable<any>=new Observable<any>()
  @Input('user')user:any;

  ngOnInit(): void {
   this.arr.push(6); //change detection takes place
  }

  add(){
  //change detection takes place because its a dom event and there is no async action happenning here
  this.arr.push(10);
  this.arr.push(11)
  }

  getToDos(){
this.todos$=
this.service.getToDos().pipe(
  map((todos:any)=>{
    this.todos.push(todos);
    /*any changes made here via concat/ clonerService/push etc will not trigger change detection
   this.todos will get updated but will not reflect in the template because change
   detection will not trigger inside async calls even if its dom event.
   So the best way would be to change the received data the way you want inside the pipe.
   Subscribe to the observable using async pipe and display the data.
   So render it using async pipe
   */
    return this.todos;
  })
)
  }


}
