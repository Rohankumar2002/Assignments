import { Component, OnInit } from '@angular/core';
import { Product } from '../product.models.ts/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:Product[]=[
    {
      productImage:"https://m.media-amazon.com/images/G/01/prime/primeinsider/mostwatchedmay/mbts_may.jpg",
      productTitle:"Manchester by the sea(Amazon Original)",
      productDescription:"Manchester by the Sea is a film of surpassing beauty and heart. Even at its most melancholy depths, it brims with candid, earnest, indefatigable life.",
    },
    {
      productImage:"https://m.media-amazon.com/images/G/01/prime/primeinsider/mostwatchedmay/bosch_may.jpg",
      productTitle:"Bosch(Amazon Original)",
      productDescription:"Bosch reinforces the binge experience as the equivalent of sinking into a good book.An L.A.P.D. homicide thirteen-year-old boy while standing trial in federal court for the murder of a serial killer.",
    },
    {
      productImage:"https://m.media-amazon.com/images/G/01/prime/primeinsider/cominginApril17/Catastrophe.jpg",
      productTitle:"Catastrophe(Amazon Original)",
      productDescription:"Funny, outrageous and sometimes heartbreaking, Catastrophe works because, at its very good heart, it's about two flawed people who made a commitment and are sticking to it.",
    },
    {
      productImage:"https://m.media-amazon.com/images/G/01/prime/primeinsider/mostwatchedmay/dh_may.jpg",
      productTitle:"Daddy's Home",
      productDescription:"Surprisingly sweet and sneakily hilarious, Daddy's Home will pleasantly surprise you when it lets loose.",

    },
    {
      productImage:"https://m.media-amazon.com/images/G/01/prime/primeinsider/mostwatchedmay/fortitude_may.jpg",
      productTitle:"Fortitude(Amazon Original)",
      productDescription:"As similar on the surface as Fortitude may be to anything that came before, buried deep down is something entirely unique.",

    },
    {
      productImage:"https://m.media-amazon.com/images/G/01/prime/primeinsider/mostwatchedapril/TheManinTheHighCastle.jpg",
      productTitle:"The Man in the High Castle(Amazon Original)",
      productDescription:"As similar on the surface as Fortitude may be to anything that came before, buried deep down is something entirely unique.",

    }
]

productsentbychild=[];
productcount:number=0;

getProductSentByChild(productTitle)
{
  this.productsentbychild.push(productTitle)
  this.productcount++;
}
}


