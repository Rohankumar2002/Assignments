import { Component, OnInit } from '@angular/core';
import {DataService} from '../shoes.service';
import { Product } from '../product.models.ts/product.models';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {

  shoes:Product[]=[];

  //inject object of dataservice class
  constructor(private shoeObj:DataService){

  }
  ngOnInit(){
    //object initialisation logic
    this.shoes=this.shoeObj.getShoesData();
  }
}
