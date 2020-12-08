import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/Quote';





@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
}) 

export class QuotesComponent implements OnInit {
  pageTitle = "Quote List" ;
  quotes : Quote [] = [] ;
  selectedQuote : Quote = new Quote();
  constructor() { }

  ngOnInit() {
   /* setTimeout(( )=> {this.pageTitle = "Quotes list after 5 seconds"
  }, 5000 ) ;

   } */


   this.quotes = [
     {
     id :  1,
     quoteNarrator : "MILOS K",
     quoteText:"This is first quote",
     quoteDate: new Date()
     },

     {id :2 ,
      quoteNarrator:"KNEZEVIC M",
      quoteText:"This is second quote",
      quoteDate : new Date()


     }
  ]

   }
  }
