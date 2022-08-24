import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ClonerService } from './cloner.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private clonerService:ClonerService) { }

  public users:any[]=[
    {
      id:1,
      name:"Tom",
      age:20
    }
  ]

  getUser(){
   return of(this.clonerService.deepClone(this.users)); //we are returning a deep cloned copy of the array
   //return of(this.users) //will not trigger change detection
  }

  createUser(newUser:any){
   this.users.push(newUser);
  }

  updateUser(newUser:any){
let userIndex=this.users.findIndex(x=>x.id == newUser.id)

this.users[userIndex]=newUser;
  }
}
