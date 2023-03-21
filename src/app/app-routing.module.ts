import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/AboutUs/AboutUs.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { CreditandidComponent } from './Components/creditandid/creditandid.component';
import { HomeComponent } from './Components/Home/Home.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { NewProductComponent } from './Components/NewProduct/NewProduct.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { ProductsComponent } from './Components/products/products.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent,title:'Home page'},
    {path:'AboutUs',component:AboutUsComponent,title:'About Us'},
    {path:'ContactUs',component:ContactUsComponent,title:'Contact Us'},
    {path:'Products',component:OrderParentComponent,title:'Products page',canActivate: [UserAuthGuard]},
    {path:'Add',component:NewProductComponent,title:'Add new Product',canActivate: [UserAuthGuard]},
    {path:'NewFormat',component:CreditandidComponent,title:'Transforming'},
    // {path:'Order',component:OrderParentComponent,title:'Order page'},
    {path:'Products/:pid',component:ProductDetailsComponent,title:'Product details page'},
    {path:'Update/:id',component: UpdateProductComponent,title: 'Update Products',
    }

  ]},
  {path:'Register',component:UserRegisterComponent,title:'Register'},
  {path:'Login', component: UserLoginComponent, title: 'Login' },
  {path:'Logout', component: UserLoginComponent, title: 'Logout' },
  {path:'**',component:NotFoundComponent,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
