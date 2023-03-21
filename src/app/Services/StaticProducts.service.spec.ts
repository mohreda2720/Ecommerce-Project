/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StaticProductsService } from './StaticProducts.service';

describe('Service: StaticProducts', () => {
    let service: StaticProductsService
  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [StaticProductsService],
      imports:[RouterModule]
    });
  });
  beforeEach(()=>{
   service = new StaticProductsService()
    
  })

  // it('should ...', inject([StaticProductsService], (service: StaticProductsService) => {
  //   expect(service).toBeTruthy();
  // }))
  it('should get products',function(){
    expect(service.getAllProducts()).toEqual(jasmine.any(Array))
  })
  it('should get first product',function(){
    expect(service.getFirstProduct()).toEqual(jasmine.any(Object))
  })
  it('should add new product',function(){
    service.addNewproduct({"id":1,"name":"LG","quantity":3,"price":35900,"img":"","categoryId":7})
    expect(service.prdList.length).toBeGreaterThanOrEqual(1)
  })



});
