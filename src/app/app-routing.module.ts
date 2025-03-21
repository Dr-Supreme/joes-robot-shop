import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home - Isaac`s Robot Shop"},
  {path: 'catalog/:filter', component: CatalogComponent, title: "Catalog - Isaac`s Robot Shop"},
  {path: 'cart', component: CartComponent, title: "Cart - Isaac`s Robot Shop"},
  {path: 'sign-in', component: SignInComponent},
  {path: 'form-controls', component: TemplateFormControlsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
