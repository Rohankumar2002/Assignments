import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  getColors():Observable<any>{
    return this.hc.get<any>('https://reqres.in/api/unknown');
  }

  getIds():Observable<any>{
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}
