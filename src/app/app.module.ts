import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    DashboardComponent,
    ProfileComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
