import { Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path:'',component:AddToCartComponent},
    {path:'product',component:ProductPageComponent},
    {path:'home',component:HomePageComponent},
    {path:'addProduct',component:AddToCartComponent}
  
];
