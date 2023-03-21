import { IProduct } from 'src/app/Models/iproduct';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '../../Models/store';
import { ProductsService } from 'src/app/Services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  public fetched:Store[]=[]
  clientName: String = "Mohamed Reda"
  // product: IProduct[]
  @Input() receivedCatID: number = 0;
  prdListOfCat: IProduct[] = [];
  orderTotalPrice: number = 0;
  @Output() chosenProduct: any = []

  @Output() totalPriceChangedEv: EventEmitter<any>;

  @Output() wholeProducts: EventEmitter<any>
  constructor(private router:Router,
    // private staticPrdService: StaticProductsService
    private prdService:ProductsService) {
    this.totalPriceChangedEv = new EventEmitter<any>();
    this.wholeProducts = new EventEmitter<any>()
    // this.product = [{
    //   id: 1,
    //   name: "S23 Ultra",
    //   quantity: 7,
    //   price: 35000,
    //   img: "https://th.bing.com/th/id/R.522aa54a1d4f203c6bca4c812e9f8b59?rik=Qnl86WPF4bGUOA&pid=ImgRaw&r=0",
    //   categoryId: 1
    // },
    // {
    //   id: 2,
    //   name: "IPhone 14 pro",
    //   quantity: 5,
    //   price: 35000,
    //   img: "https://th.bing.com/th/id/R.54d8f1d48b86b89a4b4edcda683cfd04?rik=HSLd46GFqgNvKA&pid=ImgRaw&r=0",
    //   categoryId: 1
    // },
    // {
    //   id: 3,
    //   name: "Samsung",
    //   quantity: 1,
    //   price: 35000,
    //   img: "https://th.bing.com/th/id/R.687b67b295a34a5c5453ea203cb1cee6?rik=lndwLQXG2GGj5A&pid=ImgRaw&r=0",
    //   categoryId: 2
    // },
    // {
    //   id: 4,
    //   name: "Asus",
    //   quantity: 4,
    //   price: 35000,
    //   img: "https://th.bing.com/th/id/R.c1cc66422f40bdf635a727b36cea4cc1?rik=KzBcM%2fJ33LF4CQ&pid=ImgRaw&r=0",
    //   categoryId: 2
    // },
    // {
    //   id: 5,
    //   name: "Sharp",
    //   quantity: 2,
    //   price: 35000,
    //   img: "https://th.bing.com/th/id/R.22c9be1f92f73336fecbc8005d28812c?rik=TsbJB27ToODRxQ&pid=ImgRaw&r=0",
    //   categoryId: 3
    // },
    // {
    //   id: 6,
    //   name: "Samsung",
    //   quantity: 2,
    //   price: 35000,
    //   img: "https://th.bing.com/th/id/OIP.fTYb9aip5ispuQhQE_dE0AHaGk?pid=ImgDet&w=1000&h=887&rs=1",
    //   categoryId: 3
    // }]
  }

  hideImg: boolean = false
  showImg: boolean = true
  toggleImg() {
    this.showImg = false
    this.hideImg = true
  }

  store: Store = { name: 'Amazon', branches: ["Cairo", "Giza", "Ismailia", "PortSaid"], logo: "https://th.bing.com/th/id/R.61d9101a6841f5cd92afce057830fd7a?rik=3ymuV1eRqA8jHA&pid=ImgRaw&r=0" }

  ngOnInit(){
    // this.staticPrdService.fetching().then((data:Store[])=>{
    //   this.fetched=data
    // })
    this.prdService.getAllProducts().subscribe(products=>{
      this.prdListOfCat=products
    })
  }
  decrease(prd: IProduct, itemsCount: string) {
    // console.log(prd.quantity)
    prd.quantity -= parseInt(itemsCount)
  }

  ngOnChanges(): void {
    // this.getProductsOfCat();
    // this.prdListOfCat=this.staticPrdService.getProductsbyCatId(this.receivedCatID)
    this.prdService.getProductsByCatId(this.receivedCatID).subscribe(products=>{
      this.prdListOfCat=products
    })
  }

  // private getProductsOfCat() {
  //   if (this.receivedCatID == 0) {
  //     this.prdListOfCat = Array.from(this.product);
  //     return;
  //   }

  //   this.prdListOfCat = this.product.filter((prd) => prd.categoryId == this.receivedCatID)

  // }

  updateTotalPrice(prdPrice: number, itemsCount: any) {
    this.orderTotalPrice += prdPrice * +itemsCount;
    this.totalPriceChangedEv.emit(this.orderTotalPrice);
  }

  disable() {
    return false;
  }



  getProduct(nm: any, pr: any, ct: any) {
    this.chosenProduct = [nm, pr, ct, pr * parseInt(ct)]
    console.log(this.chosenProduct)
    this.wholeProducts.emit(this.chosenProduct)
  }
  
  openDetails(prdId:number){
    this.router.navigateByUrl(`/Products/${prdId}`)
  }

  deleteProduct(id: any) {
    const observer = {
      next: (prd: IProduct) => {
        alert('Succeful Deleting');
        this.router.navigate(['/Products']);
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };
    return this.prdService.deleteProduct(id).subscribe(observer);
  }

}

