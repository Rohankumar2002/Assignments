import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'


@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css']
})
export class JsonplaceholderComponent implements OnInit {

  jsons;

  constructor(private nsObj:DataService) { }

  ngOnInit(): void {
    this.nsObj.getIds().subscribe(
      jsonData=>{
        this.jsons=jsonData;
      }
    )
  }

}
