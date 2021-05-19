import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors;

  constructor(private nsObj:DataService) { }

  ngOnInit(): void {
    this.nsObj.getColors().subscribe(
      colorData=>{
        //assign colors
        this.colors=colorData;
      }
    )
  }

}
