import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductslayoutComponent } from './components/productslayout/productslayout.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:"",pathMatch:"full",component:HomeComponent},
    {path:'product',component:ProductslayoutComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'product/category/:categoryId',component:ProductslayoutComponent},
];
