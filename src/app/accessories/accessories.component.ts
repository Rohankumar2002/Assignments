import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../accessories.service';
import { Product } from '../product.models.ts/product.models';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent{

  accessories:Product[]=[];
  constructor(private accessObj:AccessoriesService){

  }

  ngOnInit(){
    //object initialisation logic
    this.accessories=this.accessObj.getAccessData();
  }

}
