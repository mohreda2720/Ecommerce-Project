import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from '../../Models/icategory'

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent {
  date:Date=new Date()
  catList: any;
  selectedCatID: number = 0;
  receivedTotalPrice: number = 0;
  constructor(private catService:CategoryService) {
    this.catService.getAllCategories().subscribe(cat=>{
      this.catList=cat
    })
  }

  totalInparentFunc(total: number) {
    this.receivedTotalPrice = total;
  }

  cartArr: any = []
  addToCart(cart: any) {
    this.cartArr.push(cart)
    console.log(this.cartArr)
  }

}
