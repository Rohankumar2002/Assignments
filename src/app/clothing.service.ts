import { Injectable } from '@angular/core';
import { Product } from './product.models.ts/product.models';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  constructor() { }
  //clothing data
  private clothes:Product[]=[
    {
      productImage:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13743898/2021/3/12/30daf721-3ee7-4376-84fc-32f4eea8444e1615528362838TshirtsADIDASOriginalsMenTshirtsADIDASMenTshirtsADIDASOrigin5.jpg",
      productTitle:"ADIDAS",
      productDescription:"Rs. 1999 (Essentials Treefoil T-shirt)",
    },
    {
      productImage:"https://content.adidas.co.in/static/Product-EJ8089/adidas_EJ8089_1.jpg.plp",
      productTitle:"ADIDAS",
      productDescription:"Rs. 3777 (Men Adidas Training Parley-3 Stripes Tee)",
    },
    {
      productImage:"https://content.adidas.co.in/static/Product-GL5365/adidas_GL5365_1.jpg.plp",
      productTitle:"ADIDAS",
      productDescription:"Rs. 1599 (Men Adidas Training Aop Polo Tee)",
    },
    {
      productImage:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13536278/2021/3/12/97140cfa-54e2-4b38-99ff-6ab263b2790a1615529757155CamisolesInnocenceWomenCamisolesInnocenceWomenCamisolesInnoc1.jpg",
      productTitle:"ADIDAS Originals",
      productDescription:"Rs. 5900 (Men SLICE TRF TT Jacket)",

    },
    {
      productImage:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13567534/2021/3/12/a0346d6c-9b01-4698-8a2b-820bea81b7411615528370246TshirtsADIDASOriginalsMenTshirtsADIDASMenTshirtsADIDASOrigin1.jpg",
      productTitle:"ADIDAS Originals",
      productDescription:"Rs. 1200 (Men Trefoil Cotton Tank Tee)",

    },
    {
      productImage:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13743410/2021/3/17/496784f6-cb53-49f3-971f-ee60ee3f68041615963304531-ADIDAS-Originals-Men-Peach-Coloured--Blue-Slice-Trefoil-Colo-1.jpg",
      productTitle:"ADIDAS ORGINALS",
      productDescription:"Rs. 2499 (Slice Trefoil Cotton T-Shirt)",

    }
  ]
   
  getClothesData():Product[]{
     return this.clothes;
  }



}
