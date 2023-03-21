import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Store } from '../Models/store';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  prdList: IProduct[]

  constructor() {
    this.prdList = [{
      id: 1,
      name: "S23 Ultra",
      quantity: 7,
      price: 35000,
      img: "https://th.bing.com/th/id/R.522aa54a1d4f203c6bca4c812e9f8b59?rik=Qnl86WPF4bGUOA&pid=ImgRaw&r=0",
      categoryId: 1
    },
    {
      id: 2,
      name: "IPhone 14 pro",
      quantity: 5,
      price: 35000,
      img: "https://th.bing.com/th/id/R.54d8f1d48b86b89a4b4edcda683cfd04?rik=HSLd46GFqgNvKA&pid=ImgRaw&r=0",
      categoryId: 1
    },
    {
      id: 3,
      name: "Samsung",
      quantity: 1,
      price: 35000,
      img: "https://th.bing.com/th/id/R.687b67b295a34a5c5453ea203cb1cee6?rik=lndwLQXG2GGj5A&pid=ImgRaw&r=0",
      categoryId: 2
    },
    {
      id: 4,
      name: "Asus",
      quantity: 4,
      price: 35000,
      img: "https://th.bing.com/th/id/R.c1cc66422f40bdf635a727b36cea4cc1?rik=KzBcM%2fJ33LF4CQ&pid=ImgRaw&r=0",
      categoryId: 2
    },
    {
      id: 5,
      name: "Sharp",
      quantity: 2,
      price: 35000,
      img: "https://th.bing.com/th/id/R.22c9be1f92f73336fecbc8005d28812c?rik=TsbJB27ToODRxQ&pid=ImgRaw&r=0",
      categoryId: 3
    },
    {
      id: 6,
      name: "Samsung",
      quantity: 2,
      price: 35000,
      img: "https://th.bing.com/th/id/OIP.fTYb9aip5ispuQhQE_dE0AHaGk?pid=ImgDet&w=1000&h=887&rs=1",
      categoryId: 3
    }]
  }

  getAllProducts(): IProduct[] {
    return this.prdList

  }

  getProductsbyCatId(cId: number): IProduct[] {
    if (cId == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter((prd) => prd.categoryId == cId)
    }


  }

  getProductById(ProdID: number): IProduct | undefined {
    return this.prdList.find(prod => prod.id == ProdID)
  }

  addNewproduct(prd: IProduct) {
    this.prdList.push(prd)
  }

  getProductID(): number[] {
    return this.prdList.map(prd => prd.id);
  }

  getFirstProduct():any{
    return this.prdList[0]
  }

  fetching():Promise<Store[]>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([new Store('Walmart',['USA','UK'],'asdfghjkl')])
      },2000)
    })
  }

}
