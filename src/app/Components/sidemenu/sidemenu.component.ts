import { Component } from '@angular/core';
import { DiscountOffers } from '../../Models/discount-offers'
import { ICategory } from '../../Models/icategory';
import { IProduct } from '../../Models/iproduct';
import { Store } from '../../Models/store';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  discounts: DiscountOffers = DiscountOffers.firstDiscount
  clientName: String = "Mohamed"
  p:IProduct={
    id: 1,
    name: "S23 Ultra",
    quantity: 2,
    price: 35000,
    img: "https://th.bing.com/th/id/R.522aa54a1d4f203c6bca4c812e9f8b59?rik=Qnl86WPF4bGUOA&pid=ImgRaw&r=0",
    categoryId: 3
  }
}
