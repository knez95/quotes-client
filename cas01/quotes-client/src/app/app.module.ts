import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms" ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { SingleQuoteComponent } from './components/single-quote/single-quote.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuotesTableComponent } from './components/quotes-table/quotes-table.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    SingleQuoteComponent,
    LoginComponent,
    RegisterComponent,
    QuotesTableComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
