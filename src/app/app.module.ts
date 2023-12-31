import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './common/support/support.component';
import { LocatorComponent } from './common/locator/locator.component';
import { AboutComponent } from './common/about/about.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProductsComponent,
    ProfileComponent,
    SupportComponent,
    LocatorComponent,
    AboutComponent,
    SigninComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
