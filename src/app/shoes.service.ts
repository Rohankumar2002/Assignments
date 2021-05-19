import { Injectable } from '@angular/core';
import { Product } from './product.models.ts/product.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //shoes data

  private shoes:Product[]=[
    {
      productImage:"https://content.adidas.co.in/static/Product-FX3792/adidas_FX3792_1.jpg.plp",
      productTitle:"ADIDAS",
      productDescription:"Rs. 2399 (Men Adidas Sport Inspired Lite Racer Slip-On Shoes)",
    },
    {
      productImage:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11353314/2020/10/22/9f5aa022-7a16-4c6b-9c7c-1cae6b3d5f631603345846890-ADIDAS-Originals-Men-Casual-Shoes-4671603345845609-1.jpg",
      productTitle:"ADIDAS",
      productDescription:"Rs. 3777 (Men Americana Decon Sneakers)",
    },
    {
      productImage:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13442194/2021/3/31/5f3ff7f8-48c9-48f4-a551-96f4246664821617174538885-ADIDAS-Originals-Men-Flip-Flops-5911617174538434-1.jpg",
      productTitle:"ADIDAS",
      productDescription:"Rs. 1599 (Men Striped Adilette Sliders)",
    },
    {
      productImage:"https://content.adidas.co.in/static/Product-EE8138/Men_CORE_SHOES_LOW_EE8138_1.jpg.plp",
      productTitle:"ADIDAS Originals",
      productDescription:"Rs. 2499 (Men's Adidas Sport Inspired Lite Racer CLN Shoes)",

    },
    {
      productImage:"https://content.adidas.co.in/static/Product-CM4790/adidas_adi_CM4790_1.jpg.plp",
      productTitle:"ADIDAS Originals",
      productDescription:"Rs. 2279 (Men's Adidas Running Fluo Shoes)",

    },
    {
      productImage:"https://content.adidas.co.in/static/Product-CM4883/MEN_CORE-SPORTS_INSPIRED_SHOES_CM4883_1.jpg.plp",
      productTitle:"ADIDAS ORGINALS",
      productDescription:"Rs. 1619 (Men's Adidas Sport Inspired Throb Shoes)",

    }
  ]

  getShoesData():Product[]{
    return this.shoes;
  }



}
