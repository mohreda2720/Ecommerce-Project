import { Router } from '@angular/router';
import { ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { By } from '@angular/platform-browser';
import { StaticProductsService } from 'src/app/Services/StaticProducts.service';
import { Store } from '../../Models/store';
import { RouterTestingModule } from '@angular/router/testing';
import { tick } from '@angular/core/testing';
import { Location } from '@angular/common';


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let location:Location

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Disabled function should return false ', () => {
    expect(component.disable()).toBeFalse();
  });

  it('should fetch data ',async () => {
    const fakeFetch = [new Store('Walmart',['USA','UK'],'asdfghjkl')]
    // component.fetched=fakeFetch
    const service = fixture.debugElement.injector.get(StaticProductsService)
    let spy=spyOn(service,"fetching").and.returnValue(Promise.resolve(fakeFetch))
    await fixture.whenStable().then(()=>{
      expect(component.fetched).toEqual(fakeFetch);
    })
  });

  it('should navigate to "/Products/id"',inject([Router],(router:Router)=>{
    const spy = spyOn(router,'navigateByUrl')
    component.openDetails(3)
    const url = spy.calls.first().args[0]
    expect(url).toEqual("/Products/3")
  }))
});
