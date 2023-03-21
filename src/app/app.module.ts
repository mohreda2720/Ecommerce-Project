import { RouterTestingModule } from '@angular/router/testing';
// import { TestBed } from '@angular/core/testing';
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { SidemenuComponent } from './Components/sidemenu/sidemenu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { AboutUsComponent } from './Components/AboutUs/AboutUs.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { HomeComponent } from './Components/Home/Home.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { NationalPipe } from './Pipe/national.pipe';
import { CreditPipe } from './Pipe/credit.pipe';
import { CreditandidComponent } from './Components/creditandid/creditandid.component';
import { NewProductComponent } from './Components/NewProduct/NewProduct.component';
import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SidemenuComponent,
    FooterComponent,
    OrderParentComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    MainLayoutComponent,
    BorderBoxDirective,
    NationalPipe,
    CreditPipe,
    CreditandidComponent,
    NewProductComponent,
    ProductDetailsComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterTestingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
