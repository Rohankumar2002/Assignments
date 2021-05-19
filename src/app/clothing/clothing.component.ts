import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { Product } from '../product.models.ts/product.models';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent{
    
  clothes:Product[]=[];
  constructor(private clothObj:ClothingService){

  }

  ngOnInit(){
    //object initialisation logic
    this.clothes=this.clothObj.getClothesData();
  }

}
