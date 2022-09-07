import { Component, NgZone, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private service:DataService) { }

  public user:any;
  public num:number=0;
  public str:string="";
  public bool:boolean=false;
  public date:Date=new Date();


  ngOnInit(): void {
     this.getUser();
  }

  updateString(){
    this.str=`${this.str}Appended`
  }

  updateNumber(){
   this.num=this.num+9;
  }

  updateBoolean(){
   this.bool=!this.bool;
  }

  updateDate(){
    this.date=new Date();
  }

  getUser(){
    this.service.getUser().subscribe((response:any)=>this.user=response);
    /*
this.user will be passed to the child components for display
    */
  }

  createUser(obj:any){
    this.service.createUser(obj)
    this.getUser(); //we are getting a deep cloned copy of the modified array which has a different reference from the original
  }

  updateUser(obj:any){
    this.service.updateUser(obj);
    this.getUser(); //we are getting a deep cloned copy of the modified array which has a different reference from the original

  }


}
