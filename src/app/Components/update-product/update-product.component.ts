import { ProductsService } from 'src/app/Services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent {
  id = this.actRoute.snapshot.params['id'];
  updatedProduct: any = {};
  catList: any;

  constructor(
    public newPrdService: ProductsService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private catService:CategoryService
  ) {
    this.catList = [
      this.catService.getAllCategories().subscribe(cat=>{
        this.catList=cat
      })
    ];
  }
  ngOnInit() {
    this.newPrdService.getProductById(this.id).subscribe((data: {}) => {
      this.updatedProduct = data;
    });
  }

  // Update employee data
  updateProduct() {
      this.newPrdService.updateProduct(this.id, this.updatedProduct).subscribe((data) => {
          this.router.navigate(['/Products']);
        });
  }
}
