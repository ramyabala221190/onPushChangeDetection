import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from, of } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private service:DataService) { }

  public user:any;

  ngOnInit(): void {
     this.getUser();
  }

  getUser(){
    this.service.getUser().subscribe((response:any)=>this.user=response);
  }

  updateUser(obj:any){
  if(obj.action === "update"){
   this.service.updateUser(obj.value);
  }
  else if(obj.action === "create"){
  this.service.createUser(obj.value)
  }
   this.getUser(); //we are getting a deep cloned copy of the modified array which has a different reference from the original
  }

}
