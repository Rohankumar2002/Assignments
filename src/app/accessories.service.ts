import { Injectable } from '@angular/core';
import { Product } from './product.models.ts/product.models';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor() { }

  //accessories data
  private accessories:Product[]=[
    {
      productImage:"https://content.adidas.co.in/static/Product-ED0316/UNISEX_CORE_HEADWEAR_ED0316_1.jpg.plp",
      productTitle:"ADIDAS",
      productDescription:"Rs. 699 (Curved Trucker Hat)",
    },
    {
      productImage:"https://content.adidas.co.in/static/Product-GD4568/adidas_GD4568_1.jpg.plp",
      productTitle:"ADIDAS",
      productDescription:"Rs. 1499 (Adidas Originals Small Adicolor Backpack",
    },
    {
      productImage:"https://content.adidas.co.in/static/Product-FT8935/adidas_adi_FT8935_1.jpg.plp",
      productTitle:"ADIDAS",
      productDescription:"Rs. 1199 (Adidas Training Trail Bottle 750ml)",
    },
    {
      productImage:"https://content.adidas.co.in/static/Product-GC9169/UNISEX_CORE_BAGS_GC9169_1.jpg.plp",
      productTitle:"ADIDAS Originals",
      productDescription:"Rs. 1700 (Adidas Training Parkhood 0.2 BPL Backpack)",

    },
    {
      productImage:"https://content.adidas.co.in/static/Product-DH4475/adidas_DH4475_1.jpg.plp",
      productTitle:"ADIDAS Originals",
      productDescription:"Rs. 1079 (Adidas Swimming Persister Race Unmirrored Goggles)",

    },
    {
      productImage:"https://content.adidas.co.in/static/Product-FJ4967/adidas_FJ4967_1.jpg.plp",
      productTitle:"ADIDAS ORGINALS",
      productDescription:"Rs. 1219 (Adidas Swim Silicone Logo Cap)",

    }
  ]


  getAccessData():Product[]{
    return this.accessories;
  }

}
