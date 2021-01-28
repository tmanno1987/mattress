import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { AboutUsComponent } from './comp/about-us/about-us.component';
import { SelectionComponent } from './comp/selection/selection.component';
import { PaymentPlansComponent } from './comp/payment-plans/payment-plans.component';
import { ContactUsComponent } from './comp/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    SelectionComponent,
    PaymentPlansComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
