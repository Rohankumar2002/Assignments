import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   
  mySubscription:any;
  users;
  constructor(private fsObj:UserService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getUsersById().subscribe(
      userData=>{
        this.users=userData;
      },
      err=>{
        console.log("error in getting posts data",err)
      }
    )
  }


  onSelectId(id){
    this.router.navigateByUrl('users/'+id)

  }
  
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
   }
  

}
