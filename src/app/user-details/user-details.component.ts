import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../modals/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  


    postObj:Users;
  constructor(private ar:ActivatedRoute,private fs:UserService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;

    //get data of post with this current id
    this.fs.getUsersByIdWise(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.postObj=obj;
      },
      err=>{
        console.log("err in reading post",err)
      }
    )

  }
  

}
