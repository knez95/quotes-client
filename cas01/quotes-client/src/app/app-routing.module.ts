import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleQuoteComponent } from './components/single-quote/single-quote.component';

const routes: Routes = [
{
path :"",
component : QuotesComponent
},



    {
           path : "quotes" ,
           component :QuotesComponent

   },
   {
      path : "singleQuote",
      component :SingleQuoteComponent

   },
   {
      path : "singeQuote/:id",
      component : SingleQuoteComponent

   },
   {
    


    path : "register",
    component: RegisterComponent
   },
  {
   path : "login",
   component : LoginComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
