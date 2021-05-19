import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Users} from '../app/modals/user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }
  
  getUsersById():Observable<Users>{
    return this.hc.get<Users>('http://localhost:3000/users')
    
  }

  getUsersByIdWise(id):Observable<Users>{
      
    return this.hc.get<Users>('http://localhost:3000/users/'+id)
  }

}
