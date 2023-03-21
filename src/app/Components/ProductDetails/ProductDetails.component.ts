import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductsService } from 'src/app/Services/StaticProducts.service';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  recivedPrdId: number = 0
  prd: IProduct | undefined = undefined
  prodIdList = this.prdService.getProductID();
  prdID: number = 0;
  currentID: number = 0
  currentIndex: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private prdService: StaticProductsService, private location: Location, private router: Router, private newPrdService:ProductsService) { }

  ngOnInit() {
    this.recivedPrdId = Number(this.activatedRoute.snapshot.paramMap.get("pid"))

    this.newPrdService.getProductById(this.recivedPrdId).subscribe(prod=>{
      this.prd=prod
    })
    // this.prd = this.prdService.getProductById(this.recivedPrdId)

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentID = paramMap.get("pid") ? Number(paramMap.get("pid")) : 0;
      // console.log(this.currentID);



      this.newPrdService.getProductById(this.currentID).subscribe(prod=>{
        let foundProd =prod
        if (foundProd) {
          this.prd = foundProd;
        } else {
          alert("Product Not Found")
        }
      })

      // let foundProd = this.prdService.getProductById(this.currentID)
      // console.log(foundProd);

      
    })
  }

  back() {
    this.location.back()
  }

  nextPrd() {
    this.currentIndex = this.prodIdList.findIndex((item) => item == this.currentID)
    // console.log(this.currentIndex);
    this.router.navigate(["/Products", this.prodIdList[++this.currentIndex]])
  }

  prevPrd() {
    // console.log(this.currentID);
    this.currentIndex = this.prodIdList.findIndex((item) => item == this.currentID) //servies
    //  console.log(this.currentIndex);
    this.router.navigate(["/Products", this.prodIdList[--this.currentIndex]])
  }

}
