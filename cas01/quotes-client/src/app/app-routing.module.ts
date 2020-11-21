import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './components/quotes/quotes.component';
import { SingleQuoteComponent } from './components/single-quote/single-quote.component';

const routes: Routes = [{
           path : "quotes" ,
           component : QuotesComponent

   },
   {
      path : "singleQuote",
      component :SingleQuoteComponent

   },
   {
      path : "singeQuotes/:id",
      component : SingleQuoteComponent

   },
   {
    path : "login",
    component : SingleQuoteComponent 

   },
  {
   path : "register",
   component:SingleQuoteComponent

  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
