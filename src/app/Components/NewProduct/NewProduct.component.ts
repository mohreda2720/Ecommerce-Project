import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductsService } from 'src/app/Services/StaticProducts.service';

@Component({
  selector: 'app-NewProduct',
  templateUrl: './NewProduct.component.html',
  styleUrls: ['./NewProduct.component.css']
})
export class NewProductComponent implements OnInit {

  newprd:IProduct={} as IProduct
  catList: any;
  selectedCatID: number = 0;

  constructor(private productServeice:StaticProductsService,private catService:CategoryService, private newPrdService:ProductsService,private router:Router) { 
    this.catService.getAllCategories().subscribe(cat=>{
      this.catList=cat
    })
  }

  ngOnInit() {
  }


  // this.newPrdService.addProduct(this.newprd).subscribe((prd)=>{
  // })
  // this.router.navigateByUrl('/Products')
  add(){
    // this.newprd={id:id,name:nm,quantity:qt,price:pr,img:img,categoryId:cid}
    // console.log(this.newprd)
    // this.productServeice.addNewproduct(this.newprd)

    const observer={
      next:(prd:IProduct)=>{  this.router.navigateByUrl('/Products')},
      error:(err:Error)=>{alert(err.message)}
    }
    
    this.newPrdService.addProduct(this.newprd).subscribe(observer)
  }

}
