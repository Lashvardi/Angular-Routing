import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeAccessGuard } from './guards/home-access.guard';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
// ? ტიპიზირებული ობიექტების მასივი რომელიც აღწერს რომელი კომპონენტი უნდა გამოჩნდეს როდესაც Routes მივანიჭებთ
const routes: Routes = [
  {
    path: 'auth/Login',
    component: LoginComponent,
  },
  {
    path: 'auth/Register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [HomeAccessGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'products/:productId',
    component: ProductsDetailsComponent,
  },
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: '**', // ! WildCard როუთი
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //? forRoot განაპირობებს RouterModule ის ერთ ინსტანციას
  exports: [RouterModule],
})
export class AppRoutingModule {}
